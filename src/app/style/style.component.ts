import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
  col:string="";
  fs:string="";
  bg:string="";
  font:string[]=["Arial", "Calibri", "Tahoma", "Papyrus", "Times New Roman", "Courier New"];
  ff:string="";
  fw:string="";
}
