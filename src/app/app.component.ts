import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'angularapp';
  name  = 'Chandrashekhar'
  imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  data={
  name: 'Codemind',
  dept: 'IT'
  }
  empCount;
  constructor(){
  this.getValueFromServer();
  }
  getValueFromServer(){
  this.empCount=200000;
  }

  currentTime() :any {
    let date= Date()
  return date


  }
  
}


