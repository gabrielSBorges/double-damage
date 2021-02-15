import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType('LoginResponse')
export class LoginResponse {
    @Field()
    message: string;
    
    @Field()
    token: string;

    constructor(message: string, token:string) {
        this.message = message;
        this.token = token;
    }
}