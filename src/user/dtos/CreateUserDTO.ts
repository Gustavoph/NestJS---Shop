import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Nome não pode estar ser vazio!' })
  name: string;

  @IsEmail(undefined, { message: 'Email inválido' })
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 dígitos' })
  password: string;
}
