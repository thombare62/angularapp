import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [CustomerlistComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
