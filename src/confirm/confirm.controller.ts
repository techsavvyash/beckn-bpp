import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfirmService } from './confirm.service';
import { CreateConfirmDto } from './dto/create-confirm.dto';
import { UpdateConfirmDto } from './dto/update-confirm.dto';

@Controller('confirm')
export class ConfirmController {
  constructor(private readonly confirmService: ConfirmService) {}

  @Post()
  create(@Body() createConfirmDto: CreateConfirmDto) {
    return this.confirmService.create(createConfirmDto);
  }

  @Get()
  findAll() {
    return this.confirmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.confirmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfirmDto: UpdateConfirmDto) {
    return this.confirmService.update(+id, updateConfirmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.confirmService.remove(+id);
  }
}
