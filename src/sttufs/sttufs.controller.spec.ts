import { Test, TestingModule } from '@nestjs/testing';
import { SttufsController } from './sttufs.controller';
import { SttufsService } from './sttufs.service';

describe('SttufsController', () => {
  let controller: SttufsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SttufsController],
      providers: [SttufsService],
    }).compile();

    controller = module.get<SttufsController>(SttufsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
