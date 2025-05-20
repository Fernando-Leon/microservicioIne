import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosineDto } from './create-datosine.dto';

export class UpdateDatosineDto extends PartialType(CreateDatosineDto) {}
