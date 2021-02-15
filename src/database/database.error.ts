import { BadRequestException } from "@nestjs/common";
import { polyglot } from "polyglot-rpg";
import { DataBaseError } from "src/classes/DataBaseError";

export function databaseError(error: DataBaseError): BadRequestException {
    
    switch(error.errno) {
        case 1062:
            const key = getKeyFromErrorMessage(error.sqlMessage, error.parameters);    

            return new BadRequestException(polyglot.database.locale('duplicate_key', 'ptBR', { key }));

        default:
            return new BadRequestException(polyglot.misc.locale('internal_server_error', 'ptBR'));
    }
}

function getKeyFromErrorMessage(message: string, parameters: any[]) {
    let key = '<missing_key>';
    
    for (const item of parameters) {
        if (message.includes(item)) {
            key = item;
        }
    }

    return key;
}