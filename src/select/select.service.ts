import { Injectable } from '@nestjs/common';
import { SelectDTO } from './dto/select.dto';
// import { CreateSelectDto } from './dto/create-select.dto';
// import { UpdateSelectDto } from './dto/update-select.dto';

@Injectable()
export class SelectService {
  create(createSelectDto: SelectDTO) {
    return 'This action adds a new select';
  }

  findAll() {
    return `This action returns all select`;
  }

  findOne(id: number) {
    return `This action returns a #${id} select`;
  }

  remove(id: number) {
    return `This action removes a #${id} select`;
  }
}
