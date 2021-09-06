import {MigrationInterface, QueryRunner} from "typeorm";

export class addedBookTable1630962298090 implements MigrationInterface {
    name = 'addedBookTable1630962298090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`typeorm-training-db\`.\`book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`publishDate\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`typeorm-training-db\`.\`book\``);
    }

}
