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
import { ServiceAssignmentComponent } from './service-assignment/service-assignment.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { CustomPipe } from './custom.pipe';
import { SearchPipe } from './search.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { CameraComponent } from './product/camera/camera.component';
import { WatchComponent } from './product/watch/watch.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { Routingassign1Component } from './routingassign1/routingassign1.component';
import { Routingassign2Component } from './routingassign2/routingassign2.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FashionModule } from './fashion/fashion.module';




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
    ServiceAssignmentComponent,
    PipeExampleComponent,
    CustomPipe,
    SearchPipe,
    ProductFilterComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusComponent,
    ContactusComponent,
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    CameraComponent,
    WatchComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    Routingassign1Component,
    Routingassign2Component,
    HomeComponent,
    PagenotfoundComponent,
    
    
    
    
    
    
    
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
    HttpClientModule,
    FashionModule,
    
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
