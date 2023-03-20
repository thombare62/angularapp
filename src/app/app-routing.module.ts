import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { FashionListComponent } from './fashion/fashion-list/fashion-list.component';
import { KidsComponent } from './fashion/kids/kids.component';
import { MenComponent } from './fashion/men/men.component';
import { WomenComponent } from './fashion/women/women.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { Routingassign1Component } from './routingassign1/routingassign1.component';
import { Routingassign2Component } from './routingassign2/routingassign2.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  {path:'product', canActivate: [AuthGuard], component:  ProductComponent,      //path:'product', canActivate: [AuthGuard], component:  ProductComponent,
    children: [
      {path :'laptop', component: LaptopComponent },
      {path : 'mobile', component: MobileComponent},
      {path : 'camera', component: CameraComponent},
      {path: 'watch', component: WatchComponent}
    ]},
    {path:'fashion', component:  FashionListComponent,
    children: [
      {path :'men', component: MenComponent },
      {path: 'women', component: WomenComponent},
      {path: 'kids', component: KidsComponent}
    ]


    },
  {path: 'todo', component: TodoComponent},
  {path: 'post', component : DemopostComponent},
  {path: 'postdetails/:id', component: DemopostdetailsComponent},
  {path: 'user', component: Routingassign1Component},
  {path: 'userdetails/:id', component: Routingassign2Component},
  {path : '**' , component: PagenotfoundComponent},
  {path : 'login' , component: LoginformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
