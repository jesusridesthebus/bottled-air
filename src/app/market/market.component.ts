import { Component, OnInit } from '@angular/core';
import { Bottle } from './../bottle.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit{
  bottles: Bottle[] = [
    new Bottle(1, 'Swiss Alps', 2003, 'This crisp air has floral notes and will make you feel like the hills are alive.', 3000),
    new Bottle(2, 'Tahitian beach', 1978, 'Come relaze on the beach with a whiff of this sea breeze', 5000),
    new Bottle(3, 'Chicago alley', 2015, 'Experience something exciting with this whiff of old dumpster and fresh spray paint', 1500),
    new Bottle(4, 'Streets of Bangkok', 2012, 'Have your mouth water at the smells of different foods and spices being sold around you', 2000),
    new Bottle(5, 'Top of Mt. Everest', 2001, 'Live the adventure of climbing the summit with this crisp, low oxegen air', 4500),
    new Bottle(6, 'Amazon rainforest', 1986, 'While all the plants are dead now, you can experience the Amazon as it once was, lush and full of life!', 10000) 
  ]

  constructor() { }

  ngOnInit() {
  }

}
