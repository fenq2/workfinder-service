import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VacancyModule } from './vacancy/vacancy.module';

@Module({
  controllers: [],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://fenq:password12345@cluster0.oot4r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    VacancyModule,
  ],
})
export class AppModule {}
