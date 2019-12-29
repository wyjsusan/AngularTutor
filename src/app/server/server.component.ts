import { Component, OnInit } from '@angular/core';

class Student {
  constructor(public name: string,
              public major: string) {
  }

}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  isLogin = false;
  userName: string;
  students: Student[] = [new Student('pupuYan','earth'),
                         new Student('pupuYan222','cs')];

  login() {
    this.isLogin = true;

  }

  logOut() {
    this.isLogin = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
