import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {

  material: string;
  allMaterials: String[] = [''];
  foodName: String[] = ['', '111', '222'];
  isFood = false;
  tryAgain = false;

  addMaterial() {
    this.allMaterials.push(this.material);
  }

  checkFood() {
    if (this.allMaterials.toString()  === this.foodName.toString()) {
      this.isFood = true;
    } else {
      this.tryAgain = true;
    }


  }

  constructor() { }

  ngOnInit() {
  }

}
