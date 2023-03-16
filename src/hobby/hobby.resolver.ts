import { Resolver } from '@nestjs/graphql';
import { Hobby } from './schemas/Hobby';

@Resolver((of) => Hobby)
export class HobbyResolver {}
