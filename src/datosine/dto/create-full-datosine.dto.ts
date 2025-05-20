export class CreateFullDatosineDto {
  persona: {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: string;
    curp: string;
    sexo: string;
  };
  domicilio: {
    calle: string;
    numeroExterior: string;
    numeroInterior: string;
    colonia: string;
    municipio: string;
    estado: string;
    codigoPostal: string;
  };
  datosine: {
    claveElector: string;
    seccion: string;
    vigencia: string;
    fechaRegistro: string;
  };
}