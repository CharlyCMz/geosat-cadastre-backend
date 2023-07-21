import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LegalPerson } from '../entities/legal-person.entity';
import { Repository } from 'typeorm';
import { CreateLegalPersonDTO } from '../dtos/legal-person.dto';

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
      .where('legal_people.id = :id', { id })
      .getOne();
    if (!owner) {
      throw new NotFoundException(`The Owner with ID: ${id} was Not Found`);
    }
    return owner;
  }

  async createEntity(owner: CreateLegalPersonDTO): Promise<LegalPerson> {
    const newOwner = this.legalPersonRepository.create(owner);
    return await this.legalPersonRepository.save(newOwner);
  }
}
