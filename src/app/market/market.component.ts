import { Component, OnInit } from '@angular/core';
import { Bottle } from './../bottle.model';
import { Router } from '@angular/router';
import { BottleService } from '../bottle.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  providers: [BottleService]
})
export class MarketComponent implements OnInit {
  bottles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private bottleService: BottleService) {}

  ngOnInit(){
    this.bottles = this.bottleService.getBottles();
  }
 
  goToDetailPage(clickedBottle) {
    this.router.navigate(['bottle', clickedBottle.$key]);
  };

}
