import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async sayHello(@Args('name') name: string): Promise<string> {
    return 'Hello, ' + name;
  }

  @Query(() => String)
  async meet(@Args('name') name: string): Promise<string> {
    return 'greetings, ' + name;
  }

  @Mutation(() => String, {
    description: 'This Method Change the name of the user',
  })
  async changeName(@Args('name',{description:'The user name'}) name: string): Promise<string> {
    return 'Hello, ' + name;
  }
}
