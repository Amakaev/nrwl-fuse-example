import {InMemoryDbService} from 'angular-in-memory-web-api';
import {AudienceFakeDb} from './audience'

export class FuseFakeDbService implements InMemoryDbService {
  createDb() {
    return {
      'audiences': AudienceFakeDb.audiences,
    };
  }
}
