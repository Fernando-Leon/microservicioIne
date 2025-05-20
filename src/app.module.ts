import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { dataSourceOptions } from 'db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomicilioModule } from './domicilio/domicilio.module';
import { DatosineModule } from './datosine/datosine.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    PersonaModule, DomicilioModule, DatosineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

