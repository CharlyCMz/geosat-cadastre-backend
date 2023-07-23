import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../entities/property.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { NaturalPersonService } from 'src/owners/services/natural-person.service';
import { LegalPersonService } from 'src/owners/services/legal-person.service';
import { LandService } from './land.service';
import { CreatePropertyDTO, UpdatePropertyDTO } from '../dtos/property.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private propertyRepository: Repository<Property>,
    private landService: LandService,
    private naturalPersonService: NaturalPersonService,
    private legalPersonService: LegalPersonService,
  ) {}

  async findAll() {
    return await this.propertyRepository.find();
  }

  async findOneById(id: number): Promise<Property> {
    const property = await this.propertyRepository
      .createQueryBuilder('properties')
      //.leftJoinAndSelect('legal_people.properties', 'properties')
      .where('properties.id = :id', { id })
      .getOne();
    if (!property) {
      throw new NotFoundException(`The Property with ID: ${id} was Not Found`);
    }
    return property;
  }

  async createEntity(property: CreatePropertyDTO): Promise<Property> {
    try {
      let owners;
      if (property.ownerType === 'Natural') {
        owners = await this.naturalPersonService.filterByIds(property.ownerIds);
      } else if (property.ownerType === 'Legal') {
        owners = await this.legalPersonService.filterByIds(property.ownerIds);
      }
      const land = await this.landService.findOneById(property.landId);
      const newProperty = this.propertyRepository.create(property);
      newProperty.land = land;
      newProperty.owners = owners;
      return await this.propertyRepository.save(newProperty);
    } catch (error) {
      console.log(error);
      if (error instanceof QueryFailedError) {
        throw new HttpException(
          'Property  already exist',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw error;
    }
  }

  async updateEntity(id: number, payload: UpdatePropertyDTO) {
    const property = await this.findOneById(id);
    if (!property) {
      throw new NotFoundException(`The Property with ID: ${id} was Not Found`);
    }
    this.propertyRepository.merge(property, payload);
    return await this.propertyRepository.save(property);
  }

  async deleteEntity(id: number) {
    const exist = await this.findOneById(id);
    if (!exist) {
      throw new NotFoundException(`The Property with ID: ${id} was Not Found`);
    }
    return this.propertyRepository.delete(id);
  }
}
