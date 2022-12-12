import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./view/customer/customer.component";
import {LoginComponent} from "./view/login/login.component";

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
