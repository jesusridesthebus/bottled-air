import { Injectable } from '@angular/core';
import { Bottle } from './bottle.model';
import { BOTTLES } from './mock-bottles';

@Injectable()
export class BottleService {

  constructor() { }

  getBottles() {
    return BOTTLES;
  }
}
