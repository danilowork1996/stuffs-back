import { Module } from '@nestjs/common';
import { SttufsService } from './sttufs.service';
import { SttufsController } from './sttufs.controller';

@Module({
  controllers: [SttufsController],
  providers: [SttufsService],
})
export class SttufsModule {}
