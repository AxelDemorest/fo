/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { QuestionsModule } from './questions/questions.module';
import { ResponseModule } from './response/response.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.ivbawji.mongodb.net/coding_hub', { useNewUrlParser: true }),
    UserModule,
    TagModule,
    QuestionsModule,
    ResponseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
