import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './schemas/user.schema';

@Resolver((of) => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Query((returns) => [User])
  async users() {
    return this.prisma.user.findMany();
  }

  @ResolveField()
  async hobbies(@Parent() user: User) {
    return this.prisma.hobby.findMany({
      where: { user: { id: user.id } },
    });
  }
}
