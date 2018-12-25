import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {
  constructor() { }

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