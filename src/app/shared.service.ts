import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedValue: number;

  constructor() {
    console.log('Shared Service initialised');
    this.sharedValue = Math.round(Math.random() * 10);
    console.log(this.sharedValue);
  }


  public getSharedValue() {
    return this.sharedValue;
  }
}
