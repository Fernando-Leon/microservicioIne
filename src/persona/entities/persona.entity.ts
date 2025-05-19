import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreCompleto: string;

  @Column()
  curp: string;

  @Column()
  claveElector: string;

  @Column()
  numeroEmision: string;

  @Column()
  seccionElectoral: string;

  @Column()
  vigencia: string;

  @Column({ nullable: true })
  domicilio?: string;

  @Column({ nullable: true })
  estado?: string;

  @Column({ nullable: true })
  municipio?: string;

  @Column({ nullable: true })
  localidad?: string;

  @Column({ nullable: true })
  colonia?: string;

  @Column({ nullable: true })
  calle?: string;

  @Column({ nullable: true })
  numeroExterior?: string;

  @Column({ nullable: true })
  numeroInterior?: string;

  @Column({ nullable: true })
  cp?: string;
}