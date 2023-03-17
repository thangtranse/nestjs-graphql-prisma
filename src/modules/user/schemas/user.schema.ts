import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { Hobby } from 'src/modules/hobby/schemas/hobby.schema';

@ObjectType()
export class User {
  @Field((_type) => Int)
  id: number;

  @Field((_type) => String)
  email: string;

  @Field((_type) => String, { nullable: true })
  name?: string;

  @Field((_type) => String)
  hashPassword: string;

  @Field({ defaultValue: Role.USER })
  role: string[];

  @Field((_type) => [Hobby])
  hobbies: Hobby[];

  @Field((_type) => Date, { name: 'registeredAt' })
  createdAt: Date;

  @Field((_type) => Date)
  updatedAt: Date;
}
