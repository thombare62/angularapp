import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})

export class Test2Component implements OnInit {
  employee: Employee;
//@Output() fromChild: EventEmitter<string> = new EventEmitter<string>();
@Output() objFromChild: EventEmitter <Employee> = new EventEmitter <Employee>();
  constructor() { }

  ngOnInit() {
  }
  
  onKeyUP(val:Employee){
      console.log(`$event`, val);
      
  }
  
  sendToParent(){
    this.employee= new Employee()
    this.employee.fullName= "Chandrashekhar Bharat Thombare"
    this.employee.id= 420316
    this.employee.position= "Angular Web Developer"
    this.employee.salary= 35000
    this.employee.mobileNo= 8850689262
    this.objFromChild.emit(this.employee)
  }
}
