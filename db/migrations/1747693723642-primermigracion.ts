import { MigrationInterface, QueryRunner } from "typeorm";

export class Primermigracion1747693723642 implements MigrationInterface {
    name = 'Primermigracion1747693723642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`persona\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombreCompleto\` varchar(255) NOT NULL, \`curp\` varchar(255) NOT NULL, \`claveElector\` varchar(255) NOT NULL, \`numeroEmision\` varchar(255) NOT NULL, \`seccionElectoral\` varchar(255) NOT NULL, \`vigencia\` varchar(255) NOT NULL, \`domicilio\` varchar(255) NULL, \`estado\` varchar(255) NULL, \`municipio\` varchar(255) NULL, \`localidad\` varchar(255) NULL, \`colonia\` varchar(255) NULL, \`calle\` varchar(255) NULL, \`numeroExterior\` varchar(255) NULL, \`numeroInterior\` varchar(255) NULL, \`cp\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`persona\``);
    }

}
