import { Resolver } from '@nestjs/graphql';
import { Hobby } from './schemas/hobby.schema';

@Resolver((of) => Hobby)
export class HobbyResolver {}
