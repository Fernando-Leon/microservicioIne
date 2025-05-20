import { Injectable } from '@nestjs/common';
// import { CreateDatosineDto } from './dto/create-datosine.dto';
// import { UpdateDatosineDto } from './dto/update-datosine.dto';
import { Datosine } from './entities/datosine.entity';
import { Persona } from '../persona/entities/persona.entity';
import { Domicilio } from '../domicilio/entities/domicilio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFullDatosineDto } from './dto/create-full-datosine.dto';

@Injectable()
export class DatosineService {

   constructor(
    @InjectRepository(Datosine)
    private readonly datosineRepository: Repository<Datosine>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    @InjectRepository(Domicilio)
    private readonly domicilioRepository: Repository<Domicilio>,
  ) {}

  async createFull(createFullDto: CreateFullDatosineDto) {
    const id = Date.now();

    const persona = this.personaRepository.create({ id, ...createFullDto.persona });
    const domicilio = this.domicilioRepository.create({ id, ...createFullDto.domicilio });
    const datosine = this.datosineRepository.create({ id, ...createFullDto.datosine });

    await this.personaRepository.save(persona);
    await this.domicilioRepository.save(domicilio);
    await this.datosineRepository.save(datosine);

    return { id, persona, domicilio, datosine };
  }

  async getAll() {
    const datosineList = await this.datosineRepository.find();
    const result: Array<{ id: number, persona: Persona | null, domicilio: Domicilio | null, datosine: Datosine }> = [];
    for (const datosine of datosineList) {
      const persona = await this.personaRepository.findOne({ where: { id: datosine.id } });
      const domicilio = await this.domicilioRepository.findOne({ where: { id: datosine.id } });
      result.push({ id: datosine.id, persona, domicilio, datosine });
    }
    return result;
  }

  async getById(id: number) {
    const persona = await this.personaRepository.findOne({ where: { id } });
    const domicilio = await this.domicilioRepository.findOne({ where: { id } });
    const datosine = await this.datosineRepository.findOne({ where: { id } });
    if (!persona && !domicilio && !datosine) return null;
    return { id, persona, domicilio, datosine };
  }

  async getByCurp(curp: string) {
    const persona = await this.personaRepository.findOne({ where: { curp } });
    if (!persona) return null;
    const domicilio = await this.domicilioRepository.findOne({ where: { id: persona.id } });
    const datosine = await this.datosineRepository.findOne({ where: { id: persona.id } });
    return { id: persona.id, persona, domicilio, datosine };
  }

  async deleteById(id: number) {
    await this.personaRepository.delete(id);
    await this.domicilioRepository.delete(id);
    await this.datosineRepository.delete(id);
    return { deleted: true, id };
  }

    async deleteByCurp(curp: string) {
    const persona = await this.personaRepository.findOne({ where: { curp } });
    if (!persona) return { deleted: false, message: 'No existe persona con ese CURP' };
    const id = persona.id;
    await this.personaRepository.delete(id);
    await this.domicilioRepository.delete(id);
    await this.datosineRepository.delete(id);
    return { deleted: true, id };
  }

  // create(createDatosineDto: CreateDatosineDto) {
  //   return 'This action adds a new datosine';
  // }

  // findAll() {
  //   return `This action returns all datosine`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} datosine`;
  // }

  // update(id: number, updateDatosineDto: UpdateDatosineDto) {
  //   return `This action updates a #${id} datosine`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} datosine`;
  // }
}
