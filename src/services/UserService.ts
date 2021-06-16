import { getCustomRepository, Repository } from 'typeorm';
import { UserRepository } from '../data/repositories/UserRepository';
import { User } from '../domain/entities/User';

class UserService {
  private _userRepository: Repository<User>;

  constructor() {
    this._userRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    const userExists = await this._userRepository.findOne({ email });

    if (userExists) {
      return userExists;
    }

    const user = this._userRepository.create({ email });

    await this._userRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    return await this._userRepository.findOne({ email });
  }
}

export { UserService };
