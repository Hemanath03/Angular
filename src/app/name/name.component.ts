import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
  constructor(public fb:FormBuilder){}
  profileform=this.fb.group({
    personal:this.fb.group({
      first:"",
      last:"",
      email:""
    }),
    skill:this.fb.array([this.fb.control("")])
  })
  get uname() {return this.profileform.get("personal.first")}
  get last()  {return this.profileform.get("personal.last")}
  get email() {return this.profileform.get("personal.email")}

  get course()
  {
    return this.profileform.get("skill") as FormArray
  }
  addskills()
  {
    this.course.push(this.fb.control(""))
  }
  removeskills(skill:number)
  {
    this.course.removeAt(skill);
  }
  








  submitform()
  {
    console.log(this.profileform.value)
  }
  clear()
  {
    this.profileform.reset
  }
   
}
