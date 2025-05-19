import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {

  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
    const persona = this.personaRepository.create(createPersonaDto);
    return this.personaRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    const persona = await this.personaRepository.findOneBy({ id });
    if (!persona) {
      throw new NotFoundException(`Persona with id ${id} not found`);
    }
    return persona;
  }

  async findByCurp(curp: string): Promise<Persona> {
    const persona = await this.personaRepository.findOneBy({ curp });
    if (!persona) {
      throw new NotFoundException(`Persona with curp ${curp} not found`);
    }
    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
    await this.personaRepository.update(id, updatePersonaDto);
    const updated = await this.personaRepository.findOneBy({ id });
    if (!updated) {
      throw new NotFoundException(`Persona with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: number): Promise<void> {
    const result = await this.personaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Persona with id ${id} not found`);
    }
  }
}
