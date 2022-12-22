import { Injectable } from '@nestjs/common';
import knex from 'src/knex';
import { CreateOfpDto } from './dto/create-ofp.dto';
import { UpdateOfpDto } from './dto/update-ofp.dto';

@Injectable()
export class OfpService {
  create(createOfpDto: CreateOfpDto) {
    return knex('transactions').insert({
      _from: createOfpDto._from,
      _to: createOfpDto._to,
      amount: createOfpDto.amount,
    });
  }

  findAll() {
    return `This action returns all ofp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ofp`;
  }

  update(id: number, updateOfpDto: UpdateOfpDto) {
    return `This action updates a #${id} ofp`;
  }

  remove(id: number) {
    return `This action removes a #${id} ofp`;
  }
}
