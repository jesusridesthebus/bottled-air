import { Injectable } from '@angular/core';
import { Bottle } from './bottle.model';
import { BOTTLES } from './mock-bottles';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BottleService {
  bottles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.bottles = database.list('bottles');
   }

  getBottles() {
    return this.bottles;
  };

  getBottleById(bottleId: number) {
    for(let i = 0; i <= BOTTLES.length - 1; i++) {
      if(BOTTLES[i].id === bottleId) {
        return BOTTLES[i];
      }
    }
  }
}
