import { Injectable } from '@nestjs/common';
import knex from 'src/knex';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return knex('user').insert({
      name: createUserDto.name,
      gender: createUserDto.gender,
    });
  }

  findAll() {
    return knex.select().table('user').limit(50);
  }

  findOne(id: number) {
    return knex.select().table('user').where({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return knex('user')
      .where({ id })
      .update({ name: updateUserDto.name, gender: updateUserDto.gender });
  }

  remove(id: number) {
    return knex('user').where({ id }).del();
  }
}
