import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Domicilio {
  @PrimaryColumn({ type: 'bigint' })
  id: number;

  @Column()
  calle: string;

  @Column()
  numeroExterior: string;

  @Column()
  numeroInterior: string;

  @Column()
  colonia: string;

  @Column()
  municipio: string;

  @Column()
  estado: string;

  @Column()
  codigoPostal: string;
}
