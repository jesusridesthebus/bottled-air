import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Bottle } from '../bottle.model';
import { BottleService } from '../bottle.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-bottle-detail',
  templateUrl: './bottle-detail.component.html',
  styleUrls: ['./bottle-detail.component.css'],
  providers: [BottleService]
})
export class BottleDetailComponent implements OnInit {
  bottleId: string;
  bottle;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private bottleService: BottleService
    ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.bottleId = urlParameters['id'];
    }); 
    this.bottle = this.bottleService.getBottleById(this.bottleId);
  
  }

}
