import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfpService } from './ofp.service';
import { CreateOfpDto } from './dto/create-ofp.dto';
import { UpdateOfpDto } from './dto/update-ofp.dto';

@Controller('ofp')
export class OfpController {
  constructor(private readonly ofpService: OfpService) {}

  @Post()
  create(@Body() createOfpDto: CreateOfpDto) {
    return this.ofpService.create(createOfpDto);
  }

  @Get()
  findAll() {
    return this.ofpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfpDto: UpdateOfpDto) {
    return this.ofpService.update(+id, updateOfpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofpService.remove(+id);
  }
}
