import { Injectable } from '@nestjs/common';

type User = {
  name: string;
  email: string;
  password: string;
};

@Injectable()
export class UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async get(): Promise<User[]> {
    return this.users;
  }
}
