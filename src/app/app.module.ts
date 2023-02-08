import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo app/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { NewPassGeneratorComponent } from './new-pass-generator/new-pass-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    NewPassGeneratorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
