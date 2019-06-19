import { Component, OnInit, Input } from '@angular/core';
import { BottleService } from '../bottle.service';

@Component({
  selector: 'app-edit-bottle',
  templateUrl: './edit-bottle.component.html',
  styleUrls: ['./edit-bottle.component.css'],
  providers: [BottleService]
})
export class EditBottleComponent implements OnInit {
  @Input() selectedBottle;

  constructor(private bottleService: BottleService) { }

  ngOnInit() {
  }

  beginUpdatingBottle(bottleToUpdate){
    this.bottleService.updateBottle(bottleToUpdate);
  }

}
