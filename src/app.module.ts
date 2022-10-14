import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TaskModule} from "./task/task.module"
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";
import config from './inc/config';

require('dotenv').config()

@Module({

  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`
  }),
    MongooseModule.forRoot(config().database.host+":"+config().database.port+"/"+config().database.name),TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
