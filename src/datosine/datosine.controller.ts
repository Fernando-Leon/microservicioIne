import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatosineService } from './datosine.service';
import { CreateFullDatosineDto } from './dto/create-full-datosine.dto';
// import { CreateDatosineDto } from './dto/create-datosine.dto';
// import { UpdateDatosineDto } from './dto/update-datosine.dto';

@Controller('datosine')
export class DatosineController {
  constructor(private readonly datosineService: DatosineService) {}

  @Post('full')
  createFull(@Body() createFullDto: CreateFullDatosineDto) {
    return this.datosineService.createFull(createFullDto);
  }

  @Get()
  getAll() {
    return this.datosineService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.datosineService.getById(Number(id));
  }

  @Get('curp/:curp')
  getByCurp(@Param('curp') curp: string) {
    return this.datosineService.getByCurp(curp);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.datosineService.deleteById(Number(id));
  }

  @Delete('curp/:curp')
  deleteByCurp(@Param('curp') curp: string) {
    return this.datosineService.deleteByCurp(curp);
  }


  // @Post()
  // create(@Body() createDatosineDto: CreateDatosineDto) {
  //   return this.datosineService.create(createDatosineDto);
  // }

  // @Get()
  // findAll() {
  //   return this.datosineService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.datosineService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDatosineDto: UpdateDatosineDto) {
  //   return this.datosineService.update(+id, updateDatosineDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.datosineService.remove(+id);
  // }
}
