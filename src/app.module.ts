import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IneModule } from './ine/ine.module';
import { PersonaModule } from './persona/persona.module';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    IneModule, 
    PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

