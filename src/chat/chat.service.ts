import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './chat.entity';
import { MongoRepository } from 'typeorm';
import { CreateChatInput } from './dto/create-chat.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private chatRepository: MongoRepository<Chat>,
  ) {}

  async createChat(createChatInput: CreateChatInput) {
    const { userIds } = createChatInput;
    const chat = this.chatRepository.create({
      id: uuid(),
      users: userIds,
      messages: [],
    });
    return this.chatRepository.save(chat);
  }

  async updateUsers() {}
}
