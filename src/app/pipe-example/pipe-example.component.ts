import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

countLenght: number = 50000;
todaysDate = new Date();

  price: number = 70000;

  employee = {
    empid: '1',
    empname: 'Jack'
  }
  constructor() { }

  ngOnInit() {
    console.log(this.todaysDate)
  }

}
