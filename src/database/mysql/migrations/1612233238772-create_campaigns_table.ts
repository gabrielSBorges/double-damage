import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createCampaignsTable1612233238772 implements MigrationInterface {

    private table = new Table({
        name: 'campaigns',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'user_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'record_sheet_id',
                type: 'varchar',
                length: '255'
            },
            {
                name: 'active',
                type: 'boolean',
                isNullable: false,
            },
            {
                name: 'created_at',
                type: 'timestamp',
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamp',
                isNullable: false,
                default: 'now()',
            },
        ]
    });
    
    private foreignKey = new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
        referencedTableName: 'users',
    });

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKey(this.table, this.foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.table, this.foreignKey);
        await queryRunner.dropTable(this.table, true);
    }

}
