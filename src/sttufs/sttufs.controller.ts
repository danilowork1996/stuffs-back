import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SttufsService } from './sttufs.service';
import { CreateSttufDto } from './dto/create-sttuf.dto';
import { UpdateSttufDto } from './dto/update-sttuf.dto';

@Controller('sttufs')
export class SttufsController {
  constructor(private readonly sttufsService: SttufsService) {}

  @Post()
  create(@Body() createSttufDto: CreateSttufDto) {
    return this.sttufsService.create(createSttufDto);
  }

  @Get()
  findAll() {
    return this.sttufsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sttufsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSttufDto: UpdateSttufDto) {
    return this.sttufsService.update(+id, updateSttufDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sttufsService.remove(+id);
  }
}
