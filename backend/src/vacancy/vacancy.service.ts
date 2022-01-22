import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy, VacancyDocument } from './schemas/vacancy.schema';

@Injectable()
export class VacancyService {
  constructor(
    @InjectModel(Vacancy.name) private vacancyModel: Model<VacancyDocument>,
  ) {}

  async create(createVacancyDto: CreateVacancyDto): Promise<Vacancy> {
    const createdCat = new this.vacancyModel(createVacancyDto);
    return await createdCat.save();
  }

  async getAll(): Promise<Vacancy[]> {
    const vacancies = await this.vacancyModel.find();
    return vacancies;
  }

  async getOne(id: ObjectId): Promise<Vacancy> {
    const vacancy = await this.vacancyModel.findById(id);
    return vacancy;
  }
}
