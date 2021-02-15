import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LoginBody } from "src/classes/LoginBody";
import { LoginResponse } from "src/classes/LoginResponse";
import { User } from "src/database/mysql/entities/users.entity";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  async signup(@Args('user', { type: () => User }) user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Query(() => LoginResponse, { nullable: true })
  async login(@Args('user', { type: () => LoginBody }) user: LoginBody): Promise<LoginResponse> {
    return this.usersService.login(user);
  }

  @Query(() => [User])
  async users(@Args('ids', { type: () => [Int] }) ids: number[]): Promise<User[]> {
    return this.usersService.findUsers(ids);
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.findUser(id);
  }
}