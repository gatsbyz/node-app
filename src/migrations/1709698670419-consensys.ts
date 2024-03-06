import { MigrationInterface, QueryRunner } from "typeorm";

export class Consensys1709698670419 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "visitor_log" (
                "id" SERIAL PRIMARY KEY,
                "ip" VARCHAR NOT NULL,
                "visitedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "message" TEXT
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "visitor_log"
        `);
    }

}
