import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  constructor() {
    this.user = {
      name: 'PUPU YAN',
      title: 'baby',
      address: '101 santa diana ter',
      phone: [
        '200-200-3456',
        '300-300-0000'
      ]
    };
  }

  ngOnInit() {
  }

}
