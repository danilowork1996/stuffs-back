import { Test, TestingModule } from '@nestjs/testing';
import { SttufsService } from './sttufs.service';

describe('SttufsService', () => {
  let service: SttufsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SttufsService],
    }).compile();

    service = module.get<SttufsService>(SttufsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
