import { CreateUserDTO } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Get()
  findAll() {
    return this.UsersService.findAll();
  }

  @Post()
  create(@Body() user: CreateUserDTO) {
    if (!user.name || !user.name)
      throw new BadRequestException('E-mail e Nome precisam ser fornecidos!');
    return this.UsersService.create(user);
  }
}
