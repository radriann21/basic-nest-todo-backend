import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll() {
    const tasks = await this.tasksService.findAll();
    if (!tasks || tasks.length === 0) {
      throw new NotFoundException('Tasks not found');
    }
    return tasks;
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    const task = await this.tasksService.findOneById(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    const task = await this.tasksService.create(createTaskDto);
    return task;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    const task = await this.tasksService.update(id, updateTaskDto);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const task = await this.tasksService.delete(id);
    return task;
  }
}
