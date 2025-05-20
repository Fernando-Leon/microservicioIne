import { Module } from '@nestjs/common';
import { DatosineService } from './datosine.service';
import { DatosineController } from './datosine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from 'src/persona/entities/persona.entity';
import { Domicilio } from '../domicilio/entities/domicilio.entity';
import { Datosine } from './entities/datosine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Datosine, Persona, Domicilio])],
  controllers: [DatosineController],
  providers: [DatosineService],
})
export class DatosineModule {}
