import { Injectable } from '@angular/core';
import { Bottle } from './bottle.model';
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

  addBottle(newBottle: Bottle) {
    this.bottles.push(newBottle);
  }

  getBottleById(bottleId: string) {
    return this.database.object('bottles/' + bottleId);
  }
}
