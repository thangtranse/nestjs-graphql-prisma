import { Module } from '@nestjs/common';
import { HobbyService } from './hobby.service';
import { HobbyResolver } from './hobby.resolver';

@Module({
  providers: [HobbyService, HobbyResolver],
})
export class HobbyModule {}
