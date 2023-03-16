import { Component } from '@angular/core';
import { Employee } from './models/employee';

import { RapidapiService } from './services/rapidapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = [];
  
  finarray: any;
  rapidArrayPr: any;
  sendToParent(receivedData : string | number){
    console.log(`received Data:`,receivedData);
    this.display.push(receivedData);
    console.log(this.display);
  }  
  title = 'angularapp';
  name  = 'Chandrashekhar'
  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  data={
  name: 'Codemind',
  dept: 'IT'
  }
  empCount;
  constructor( private rapidapiService : RapidapiService ){
    
  this.getValueFromServer();
  }
  getValueFromServer(){
  this.empCount=200000;
  }

  currentTime() :any {
    let date= Date()
  return date
  }
  testNew(){
    alert(`Event Raised`);
  }
  onParent(val:Employee){
    console.log('From child to parent emp', val);
    
  }
  ngOnInit(): void {
    
    };


    
  
  

  }


