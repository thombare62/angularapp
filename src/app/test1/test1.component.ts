import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  count: number = 0;
  firstName :string = 'Rocky';
  addData :string = " ";
  constructor() { }

  ngOnInit() {
  }
  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
onButtonClick(){
  delete this.addData
  console.log(`Data Reset Successfully`);
  
  
  //console.log(`Button was clicked`);
  
}
}
