import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1Color:string=""
  isDiv2Active:boolean=false
  num1:string=''
  num2:string=''

  customStyle:any={
    'color':'white',
    'background-color':'green',
    'border-radius':'50px',
    'width':'100px',
    'height':'100px'
    

  }
  employeeList:any[]=[{id:1,name:'navneet',gender:'female',lastname:'anand',status:false,totalMarks:90},
  {id:2,name:'vikram',lastname:'pandey',gender:'female',status:true,totalMarks:80},
  {id:3,name:'shubham',lastname:'sharma',gender:'male',status:false,totalMarks:70},
  {id:4,name:'prasad',lastname:'verma',gender:'male',status:true,totalMarks:50},
]
  isChecked:boolean=false;
  successClass(){
    this.div1Color="bg-success"
  }

  dangerClass(){
    this.div1Color="bg-danger"
  }
 
  toggleDiv2(){
    this.isDiv2Active= !this.isDiv2Active
  }
  

}
