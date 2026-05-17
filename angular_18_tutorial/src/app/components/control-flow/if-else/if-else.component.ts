import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  isDiv1Visible=false;
  isDiv2WarningVisible=false;
  num1:string='';
  num2:string='';
 
  selectedValue:string=''

  constructor(){

  }
  showDiv1(){
   this.isDiv1Visible = true
  }
  hideDiv1(){
  this.isDiv1Visible=false
  }
  toggle(){
   this.isDiv2WarningVisible=!this.isDiv2WarningVisible
  }
  


}
