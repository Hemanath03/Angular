import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent { 
  profile:contact;

  constructor()
  {
    this.profile={
      user:""  
    }
  } 
  submitform(profileform:any)
  {
    console.log(profileform.value);
  }
}
class contact
{
  user!:string;
}
 
 
 
