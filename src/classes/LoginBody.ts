import { Field, InputType } from "@nestjs/graphql";

@InputType('LoginInput')
export class LoginBody {
    @Field()
    email: string;
    
    @Field()
    password: string;
    
    @Field({ nullable: true })
    expires: number;
}