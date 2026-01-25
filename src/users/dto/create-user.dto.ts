import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto.' })
  first_name: string;

  @IsString({ message: 'El apellido debe ser una cadena de texto.' })
  last_name: string;

  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto.' })
  username: string;

  @IsString({ message: 'El correo debe ser una cadena de texto.' })
  email: string;

  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  password: string;
}
