import { MigrationInterface, QueryRunner } from "typeorm";

export class Migracionuno1747718034721 implements MigrationInterface {
    name = 'Migracionuno1747718034721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`persona\` (\`id\` bigint NOT NULL, \`nombre\` varchar(255) NOT NULL, \`apellidoPaterno\` varchar(255) NOT NULL, \`apellidoMaterno\` varchar(255) NOT NULL, \`fechaNacimiento\` varchar(255) NOT NULL, \`curp\` varchar(255) NOT NULL, \`sexo\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`domicilio\` (\`id\` bigint NOT NULL, \`calle\` varchar(255) NOT NULL, \`numeroExterior\` varchar(255) NOT NULL, \`numeroInterior\` varchar(255) NOT NULL, \`colonia\` varchar(255) NOT NULL, \`municipio\` varchar(255) NOT NULL, \`estado\` varchar(255) NOT NULL, \`codigoPostal\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`datosine\` (\`id\` bigint NOT NULL, \`claveElector\` varchar(255) NOT NULL, \`seccion\` varchar(255) NOT NULL, \`vigencia\` varchar(255) NOT NULL, \`fechaRegistro\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`datosine\``);
        await queryRunner.query(`DROP TABLE \`domicilio\``);
        await queryRunner.query(`DROP TABLE \`persona\``);
    }

}
