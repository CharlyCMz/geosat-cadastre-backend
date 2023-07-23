import { Injectable, NotFoundException } from '@nestjs/common';
import { Construction } from '../entities/construction.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CreateConstructionDTO,
  UpdateConstructionDTO,
} from '../dtos/construction.dto';
import { LandService } from './land.service';

@Injectable()
export class ConstructionService {
  constructor(
    @InjectRepository(Construction)
    private constructionRepository: Repository<Construction>,
    private landService: LandService,
  ) {}

  async findAll() {
    return await this.constructionRepository.find();
  }

  async findOneById(id: number): Promise<Construction> {
    const construction = await this.constructionRepository
      .createQueryBuilder('constructions')
      //.leftJoinAndSelect('legal_people.properties', 'properties')
      .where('constructions.id = :id', { id })
      .getOne();
    if (!construction) {
      throw new NotFoundException(
        `The construction with ID: ${id} was Not Found`,
      );
    }
    return construction;
  }

  async createEntity(
    construction: CreateConstructionDTO,
  ): Promise<Construction> {
    try {
      const land = await this.landService.findOneById(construction.landId);
      const newConstruction = this.constructionRepository.create(construction);
      newConstruction.land = land;
      return await this.constructionRepository.save(newConstruction);
    } catch (error) {
      throw error;
    }
  }

  async updateEntity(id: number, payload: UpdateConstructionDTO) {
    const construction = await this.findOneById(id);
    if (!construction) {
      throw new NotFoundException(
        `The Construction with ID: ${id} was Not Found`,
      );
    }
    this.constructionRepository.merge(construction, payload);
    return await this.constructionRepository.save(construction);
  }

  async deleteEntity(id: number) {
    const exist = await this.findOneById(id);
    if (!exist) {
      throw new NotFoundException(
        `The Construction with ID: ${id} was Not Found`,
      );
    }
    return this.constructionRepository.delete(id);
  }
}
