import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NaturalPerson } from '../entities/natural-person.entity';
import { QueryFailedError, Repository } from 'typeorm';
import {
  CreateNaturalPersonDTO,
  UpdateNaturalPersonDTO,
} from '../dtos/natural-person.dto';

@Injectable()
export class NaturalPersonService {
  constructor(
    @InjectRepository(NaturalPerson)
    private naturalPersonRepository: Repository<NaturalPerson>,
  ) {}

  async findAll() {
    return await this.naturalPersonRepository.find();
  }

  async findOneById(id: number): Promise<NaturalPerson> {
    const owner = await this.naturalPersonRepository
      .createQueryBuilder('natural_people')
      //.leftJoinAndSelect('natural_people.properties', 'property')
      .where('natural_people.id = :id', { id })
      .getOne();
    if (!owner) {
      throw new NotFoundException(`The Owner with ID: ${id} was Not Found`);
    }
    return owner;
  }

  async filterByIds(list: number[]): Promise<NaturalPerson[]> {
    return await this.naturalPersonRepository
      .createQueryBuilder('natural_people')
      .where('natural_people.id IN (:...list)', { list })
      .getMany();
  }

  async createEntity(owner: CreateNaturalPersonDTO): Promise<NaturalPerson> {
    try {
      const newOwner = this.naturalPersonRepository.create(owner);
      return await this.naturalPersonRepository.save(newOwner);
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

  async updateEntity(id: number, payload: UpdateNaturalPersonDTO) {
    const owner = await this.findOneById(id);
    if (!owner) {
      throw new NotFoundException(`The Owner with ID: ${id} was Not Found`);
    }
    this.naturalPersonRepository.merge(owner, payload);
    return await this.naturalPersonRepository.save(owner);
  }

  async deleteEntity(id: number) {
    const exist = await this.findOneById(id);
    if (!exist) {
      throw new NotFoundException(`The Owner with ID: ${id} was Not Found`);
    }
    return this.naturalPersonRepository.delete(id);
  }
}
