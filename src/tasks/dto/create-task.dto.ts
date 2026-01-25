import { IsString, IsBoolean } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  user_id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;
}
