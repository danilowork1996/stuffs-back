import { Injectable } from '@nestjs/common';
import { CreateSttufDto } from './dto/create-sttuf.dto';
import { UpdateSttufDto } from './dto/update-sttuf.dto';

@Injectable()
export class SttufsService {
  create(createSttufDto: CreateSttufDto) {
    return 'This action adds a new sttuf';
  }

  findAll() {
    return `This action returns all sttufs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sttuf`;
  }

  update(id: number, updateSttufDto: UpdateSttufDto) {
    return `This action updates a #${id} sttuf`;
  }

  remove(id: number) {
    return `This action removes a #${id} sttuf`;
  }
}
