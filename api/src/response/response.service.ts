import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseDto } from './dto/response.dto';
import { responseDocument } from './schemas/response.schema';

@Injectable()
export class ResponseService {

  constructor(
    @InjectModel('Response') private readonly responseModel: Model<responseDocument>,
  ) {}

  async create(ResponseDto: ResponseDto): Promise<ResponseDto> {
    const createdResponse = new this.responseModel(ResponseDto);
    return createdResponse.save();
  }

  async findAll(): Promise<ResponseDto[]> {
    const responses = await this.responseModel.find().exec();
    return responses;
  }

  findOne(id: number) {
    return `This action returns a #${id} response`;
  }

  update(id: number, ResponseDto: ResponseDto) {
    return `This action updates a #${id} response`;
  }

  remove(id: number) {
    return `This action removes a #${id} response`;
  }
}
