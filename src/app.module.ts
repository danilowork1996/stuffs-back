import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SttufsModule } from './sttufs/sttufs.module';

@Module({
  imports: [SttufsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
