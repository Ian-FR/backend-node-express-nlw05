import { getCustomRepository, Repository } from 'typeorm';
import { SettingsRepository } from '../data/repositories/SettingRepository';
import { Setting } from '../domain/entities/Setting';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingService {
  private _settingsRepository: Repository<Setting>;

  constructor() {
    this._settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({ chat, username }: ISettingsCreate) {
    const userAlreadyExists = await this._settingsRepository.findOne({
      username
    });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const settings = this._settingsRepository.create({ chat, username });

    await this._settingsRepository.save(settings);

    return settings;
  }

  async finsByUsername(username: string) {
    const settings = await this._settingsRepository.findOne(username);

    return settings;
  }

  async update(username: string, chat: boolean) {
    await this._settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :username', { username })
      .execute();
  }
}

export { SettingService };
