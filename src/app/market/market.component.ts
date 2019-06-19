import { Component, OnInit } from '@angular/core';
import { Bottle } from './../bottle.model';
import { Router } from '@angular/router';
import { BottleService } from '../bottle.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  constructor(private router: Router, private bottleService: BottleService) {}
  bottles: Bottle[];

  ngOnInit() {
    this.bottles = this.bottleService.getBottles();
  }
 
  goToDetailPage(clickedBottle: Bottle) {
    this.router.navigate(['bottle', clickedBottle.id]);
  };

}
