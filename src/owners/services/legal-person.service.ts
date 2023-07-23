import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LegalPerson } from '../entities/legal-person.entity';
import { QueryFailedError, Repository } from 'typeorm';
import {
  CreateLegalPersonDTO,
  UpdateLegalPersonDTO,
} from '../dtos/legal-person.dto';

@Injectable()
export class LegalPersonService {
  constructor(
    @InjectRepository(LegalPerson)
    private legalPersonRepository: Repository<LegalPerson>,
  ) {}

  async findAll() {
    return await this.legalPersonRepository.find();
  }

  async findOneById(id: number): Promise<LegalPerson> {
    const owner = await this.legalPersonRepository
      .createQueryBuilder('legal_people')
      //.leftJoinAndSelect('legal_people.properties', 'properties')
      .where('legal_people.id = :id', { id })
      .getOne();
    if (!owner) {
      throw new NotFoundException(`The Owner with ID: ${id} was Not Found`);
    }
    return owner;
  }

  async createEntity(owner: CreateLegalPersonDTO): Promise<LegalPerson> {
    try {
      const newOwner = this.legalPersonRepository.create(owner);
      return await this.legalPersonRepository.save(newOwner);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException(
          'Owner NIT already exist',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw error;
    }
  }

  async updateEntity(id: number, payload: UpdateLegalPersonDTO) {
    const owner = await this.findOneById(id);
    if (!owner) {
      throw new NotFoundException(`The Owner with ID: ${id} was Not Found`);
    }
    this.legalPersonRepository.merge(owner, payload);
    return await this.legalPersonRepository.save(owner);
  }

  async deleteEntity(id: number) {
    const exist = await this.findOneById(id);
    if (!exist) {
      throw new NotFoundException(`The Owner with ID: ${id} was Not Found`);
    }
    return this.legalPersonRepository.delete(id);
  }
}
