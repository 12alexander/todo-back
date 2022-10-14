import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTaskDto } from "./dto/create-task.dto";
import { Task, TaskDocument } from "./schemas/task.schema";


@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>,
    ) { }

    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        console.log(createTaskDto);
        return this.taskModel.create(createTaskDto);
    }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findOne(id: String): Promise<Task> {
        return this.taskModel.findOne({ _id: id }).exec();
    }

    async update(id: String, updateTaskDto: CreateTaskDto) {
        return this.taskModel.findByIdAndUpdate({ _id: id },
            updateTaskDto, {
            new: true,
        })
    }

    async remove(id: String) {
        return this.taskModel.findByIdAndRemove({ _id: id }).exec();
    }


}