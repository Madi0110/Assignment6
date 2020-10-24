import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers  : [ ]
})
export class Child2Component {
  sharedValue;

  constructor(private sharedService: SharedService) {
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child-2' + this.sharedValue.toString());
  }



}
