import { Injectable } from '@nestjs/common';
import knex from 'src/knex';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  findAll() {
    return knex.select().table('accounts');
  }

  findOne(id: number) {
    return knex.select().table('accounts').where({ id });
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return knex('accounts')
      .where({ id })
      .update({ balance: updateAccountDto.balance });
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
