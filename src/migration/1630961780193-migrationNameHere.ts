import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationNameHere1630961780193 implements MigrationInterface {
    name = 'migrationNameHere1630961780193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`typeorm-training-db\`.\`user\` ADD \`nickName\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`typeorm-training-db\`.\`user\` DROP COLUMN \`nickName\``);
    }

}
