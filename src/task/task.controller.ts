import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskService } from "./task.service";

@Controller("task")
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        return await this.taskService.create(createTaskDto);
    }

    @Get()
    async findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: String) {
        return this.taskService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: String, @Body() updateTaskDto: CreateTaskDto) {
        return this.taskService.update(id, updateTaskDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: String) {
        return this.taskService.remove(id);
    }

}