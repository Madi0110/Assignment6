import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { SharedService} from '../../shared.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
  providers: []
})
export class Child3Component  {

  sharedValue;

  constructor(private sharedService: SharedService) {
    this.sharedValue = sharedService.getSharedValue();
    console.log('Child-3' + this.sharedValue.toString());
  }
}
