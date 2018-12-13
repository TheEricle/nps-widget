import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    let rating = [{
    "id": 1,
    "disable": false,
    "rating": null,
    "feedback": "Applesauce"
}];
    return { rating };
  }
}