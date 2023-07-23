import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Land } from '../entities/land.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateLandDTO, UpdateLandDTO } from '../dtos/land.dto';

@Injectable()
export class LandService {
  constructor(
    @InjectRepository(Land)
    private landRepository: Repository<Land>,
  ) {}

  async findAll() {
    return await this.landRepository.find();
  }

  async findOneById(id: number): Promise<Land> {
    const land = await this.landRepository
      .createQueryBuilder('lands')
      //.leftJoinAndSelect('legal_people.properties', 'properties')
      .where('lands.id = :id', { id })
      .getOne();
    if (!land) {
      throw new NotFoundException(`The land with ID: ${id} was Not Found`);
    }
    return land;
  }

  async createEntity(land: CreateLandDTO): Promise<Land> {
    try {
      const newLand = this.landRepository.create(land);
      return await this.landRepository.save(newLand);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new HttpException('Land  already exist', HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }

  async updateEntity(id: number, payload: UpdateLandDTO) {
    const land = await this.findOneById(id);
    if (!land) {
      throw new NotFoundException(`The Land with ID: ${id} was Not Found`);
    }
    this.landRepository.merge(land, payload);
    return await this.landRepository.save(land);
  }

  async deleteEntity(id: number) {
    const exist = await this.findOneById(id);
    if (!exist) {
      throw new NotFoundException(`The Land with ID: ${id} was Not Found`);
    }
    return this.landRepository.delete(id);
  }
}
