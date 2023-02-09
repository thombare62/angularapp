
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-drop-list',
  templateUrl: './country-drop-list.component.html',
  styleUrls: ['./country-drop-list.component.css']
})
export class CountryDropListComponent implements OnInit {

  countries = ['India', 'Nepal'];
  states : any = '';

  constructor() { }

  ngOnInit() {
  }

  setState(val: any) {
    if (val == "India") {
      this.states = ['Maharashtra', 'Gujrat', 'Madhya Pradesh', 'Bihar'];
    }
    if (val == 'Nepal') {
      this.states = ['Madhesh', 'Bagmati', 'Gandaki',' Lumbini'];
    }
  }
}
