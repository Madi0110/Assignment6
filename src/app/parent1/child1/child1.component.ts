import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers : []
})
export class Child1Component  {

  sharedValue;

  constructor(private sharedService: SharedService) {
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child-1' + this.sharedValue.toString());
  }
}
