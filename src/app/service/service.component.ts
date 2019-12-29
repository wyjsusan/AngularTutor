import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  //message: string = "hello";
  message: string = new Date().toDateString();
  name = 'pupuyan';

  getName() {
    return 'pu-pu';
  }

  counter = 0;
  plusOne() {
    this.counter++;
  }
  resetCounter() {
    this.counter = 0;
  }



  constructor() { }

  ngOnInit() {
  }

}
