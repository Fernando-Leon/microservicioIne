import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidoPaterno: string;

  @Column()
  apellidoMaterno: string;

  @Column()
  fechaNacimiento: string;

  @Column()
  curp: string;

  @Column()
  sexo: string;
}