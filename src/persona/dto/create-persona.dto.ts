export class CreatePersonaDto {
  nombreCompleto: string;
  curp: string;
  claveElector: string;
  numeroEmision: string;
  seccionElectoral: string;
  vigencia: string;
  domicilio?: string;
  estado?: string;
  municipio?: string;
  localidad?: string;
  colonia?: string;
  calle?: string;
  numeroExterior?: string;
  numeroInterior?: string; 
  cp?: string;
}
