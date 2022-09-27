import { Injectable } from '@nestjs/common';
import { CreateConfirmDto } from './dto/create-confirm.dto';
import { UpdateConfirmDto } from './dto/update-confirm.dto';

@Injectable()
export class ConfirmService {
  create(createConfirmDto: CreateConfirmDto) {
    return 'This action adds a new confirm';
  }

  findAll() {
    return `This action returns all confirm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} confirm`;
  }

  update(id: number, updateConfirmDto: UpdateConfirmDto) {
    return `This action updates a #${id} confirm`;
  }

  remove(id: number) {
    return `This action removes a #${id} confirm`;
  }
}
