import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CheckoutComponent } from './checkout/checkout.component';
import { EmployeeComponent } from './employee/employee.component';
import { NameComponent } from './name/name.component';
import { ProfileComponent } from './profile/profile.component';
import { StyleComponent } from './style/style.component';

const routes: Routes = [  
  {path:'emp',component:EmployeeComponent},
  {path:'style',component:StyleComponent},
  {path:'pro',component:ProfileComponent},
  {path:'name',component:NameComponent},
  {path:'check',component:CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
