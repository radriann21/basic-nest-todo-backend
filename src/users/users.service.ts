import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const emailExists = await this.userModel.findOne({
      where: { email: createUserDto.email },
    });

    if (emailExists) {
      throw new BadRequestException('Email already exists');
    }

    return await this.userModel.create({ ...createUserDto });
  }

  async findAll() {
    const users = await this.userModel.findAll();
    if (!users || users.length === 0) {
      throw new NotFoundException('Users not found');
    }
    return users;
  }

  async findOne(id: number) {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.update(updateUserDto, { where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.destroy({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
