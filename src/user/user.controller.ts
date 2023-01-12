import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() input: any) {
    this.userRepository.create(input);
    return input;
  }

  @Get()
  async getAllUsers() {
    return this.userRepository.get();
  }
}
