import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Datosine {
  @PrimaryColumn({ type: 'bigint' })
  id: number;
  @Column()
  claveElector: string;

  @Column()
  seccion: string;

  @Column()
  vigencia: string;

  @Column()
  fechaRegistro: string;
}
