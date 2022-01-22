import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VacancyDocument = Vacancy & Document;

@Schema()
export class Vacancy {
  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  salary: string;

  @Prop([String])
  tags: string[];
}

export const VacancySchema = SchemaFactory.createForClass(Vacancy);
