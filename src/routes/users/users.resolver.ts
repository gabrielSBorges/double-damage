import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "src/database/mysql/entities/users.entity";
import { UsersService } from "./users.service";

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  async signup(@Args('user', { type: () => User }) user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Query(() => User, { nullable: true })
  async login(@Args('user', { type: () => User }) user: User): Promise<User> {
    return this.usersService.login(user);
  }
}