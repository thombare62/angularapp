import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit {
@Input() parentData: string;
  constructor() {
    console.log(`HooksComponent Constructor Called`);
    
   }
  ngOnInit(): void {
    console.log(`ngOnInit Method Called`);
    
  }





  ngOnChanges(changes: SimpleChanges): void {
    console.log(`HooksComponent ngOnChanges Called`, changes);
    for( const propname in changes){
      const prop= changes[propname]  //parentData
      console.log(prop);
      const{previousValue, currentValue, firstChange}= prop;
      console.log(`Prop Name= ${propname}`);
      console.log(`Previous Value= ${previousValue}`);
      console.log(`Current Value= ${currentValue}`);
      console.log(`First Change Value= ${firstChange}`);
      console.log(`-----------------------------------------`);
      
      
      
    }
    
  }

 

}
