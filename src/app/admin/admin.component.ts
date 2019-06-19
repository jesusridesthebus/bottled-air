import { Component, OnInit } from '@angular/core';
import { BottleService } from '../bottle.service';
import { Bottle } from '../bottle.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {

  constructor(private bottleService: BottleService) { }

  ngOnInit() {
  }

  submitForm(origin: string, year: number, description: string, price: number) {
    var newBottle: Bottle = new Bottle(origin, year, description, price);
    console.log(newBottle);
  }

}
