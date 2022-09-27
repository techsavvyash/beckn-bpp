import { Injectable } from '@nestjs/common';
import { CreateCancelDto } from './dto/create-cancel.dto';
import { UpdateCancelDto } from './dto/update-cancel.dto';

@Injectable()
export class CancelService {
  create(createCancelDto: CreateCancelDto) {
    return 'This action adds a new cancel';
  }

  findAll() {
    return `This action returns all cancel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancel`;
  }

  update(id: number, updateCancelDto: UpdateCancelDto) {
    return `This action updates a #${id} cancel`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancel`;
  }
}
