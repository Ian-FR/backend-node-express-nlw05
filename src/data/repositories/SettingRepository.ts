import { EntityRepository, Repository } from 'typeorm';
import { Setting } from '../../domain/entities/Setting';

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };
