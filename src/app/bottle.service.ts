import { Injectable } from '@angular/core';
import { Bottle } from './bottle.model';
import { BOTTLES } from './mock-bottles';

@Injectable()
export class BottleService {

  constructor() { }

  getBottles() {
    return BOTTLES;
  }

  getBottleById(bottleId: number) {
    for(let i = 0; i <= BOTTLES.length - 1; i++) {
      if(BOTTLES[i].id === bottleId) {
        return BOTTLES[i];
      }
    }
  }
}
