import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { VacancyService } from './vacancy.service';

@Controller('/api/vacancies')
export class VacancyController {
  constructor(private vacancyService: VacancyService) {}

  @Post()
  create(@Body() createVacancyDto: CreateVacancyDto) {
    return this.vacancyService.create(createVacancyDto);
  }

  @Get()
  getAll() {
    return this.vacancyService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.vacancyService.getOne(id);
  }
}
