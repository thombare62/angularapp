import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionListComponent } from './fashion-list/fashion-list.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [FashionListComponent, MenComponent, WomenComponent, KidsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class FashionModule { }
