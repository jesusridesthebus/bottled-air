import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Bottle } from '../bottle.model';

@Component({
  selector: 'app-bottle-detail',
  templateUrl: './bottle-detail.component.html',
  styleUrls: ['./bottle-detail.component.css']
})
export class BottleDetailComponent implements OnInit {
  bottleId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.bottleId = parseInt(urlParameters['id']);
    });  
  }

}
