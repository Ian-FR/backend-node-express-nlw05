import { getCustomRepository, Repository } from 'typeorm';
import { MessageRepository } from '../data/repositories/MessageRepository';
import { Message } from '../domain/entities/Message';

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessageService {
  private _messageRepository: Repository<Message>;

  constructor() {
    this._messageRepository = getCustomRepository(MessageRepository);
  }

  async create({ admin_id, text, user_id }: IMessageCreate) {
    const message = this._messageRepository.create({
      admin_id,
      text,
      user_id
    });

    await this._messageRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    return await this._messageRepository.find({
      where: { user_id },
      relations: ['user']
    });
  }
}

export { MessageService };
