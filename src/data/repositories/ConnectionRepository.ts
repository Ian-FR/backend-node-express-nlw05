import { EntityRepository, Repository } from 'typeorm';
import { Connection } from '../../domain/entities/Connection';

@EntityRepository(Connection)
class ConnectionRepository extends Repository<Connection> {}

export { ConnectionRepository };
