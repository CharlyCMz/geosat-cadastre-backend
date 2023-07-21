import { Injectable } from '@nestjs/common';
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

  async createEntity(owner: CreateLegalPersonDTO): Promise<LegalPerson> {
    const newOwner = this.legalPersonRepository.create(owner);
    return await this.legalPersonRepository.save(newOwner);
  }
}
