import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo app/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule, ReactiveFormsModule,   } from '@angular/forms';
import { NewPassGeneratorComponent } from './new-pass-generator/new-pass-generator.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { CountryDropListComponent } from './country-drop-list/country-drop-list.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import { DirectiveComponent } from './directive/directive.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateRegistrationFormComponent } from './template-registration-form/template-registration-form.component';
import { ReactForm2Component } from './react-form2/react-form2.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    NewPassGeneratorComponent,
    NgForComponent,
    CountryDropListComponent,
    NgIfComponent,
    CustomDirective,
    DirectiveComponent,
    LoginFormComponent,
    ReactiveFormComponent,
    TemplateRegistrationFormComponent,
    ReactForm2Component,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatIconModule, 
    MatButtonToggleModule,
    MatGridListModule,
    
    
    
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
