import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskModel: typeof Task,
  ) {}

  async create(Task: CreateTaskDto) {
    const task = await this.taskModel.create({ ...Task });
    return task;
  }

  async findAll() {
    const tasks = await this.taskModel.findAll();
    return tasks;
  }

  async findOneById(id: string) {
    const task = await this.taskModel.findOne({ where: { id } });
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskModel.findOne({ where: { id } });
    if (!task) {
      return null;
    }
    await task.update(updateTaskDto);
    return task;
  }

  async delete(id: string) {
    await this.taskModel.destroy({ where: { id } });
    return 'Task deleted';
  }
}
