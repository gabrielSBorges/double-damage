import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createPlayersTable1612233520891 implements MigrationInterface {

    private table = new Table({
        name: 'players',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'user_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'campaign_id',
                type: 'integer',
                isNullable: false,
            },
            {
                name: 'character_id',
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
    
    private foreignKeys = [
        new TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            referencedTableName: 'users',
        }),
        new TableForeignKey({
            columnNames: ['campaign_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            referencedTableName: 'campaigns',
        })
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.table);
        await queryRunner.createForeignKeys(this.table, this.foreignKeys);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKeys(this.table, this.foreignKeys);
        await queryRunner.dropTable(this.table, true);
    }

}
