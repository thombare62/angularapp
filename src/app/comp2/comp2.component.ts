import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName;
  mobileNo;  
  constructor(private _utilityService : UtilityService) { 

    this._utilityService.userName.subscribe(res => {
        console.log('Comp2' , res);
        this.userName=res;
    }, err => {
        console.log('Error Occurred', err);
        
    })
    this._utilityService.mobileNo.subscribe(res => {
      console.log('Comp2' , res);
      this.mobileNo=res;
  })
    
  }

  ngOnInit() {
  }
  updateUserName(uname, mobNo)
  {
    this.userName=uname.value;
    console.log(uname.value);
    this._utilityService.userName.next(uname.value);

    this.mobileNo=mobNo.value;
    console.log(mobNo.value);
    this._utilityService.mobileNo.next(mobNo.value);
    
  }
}
