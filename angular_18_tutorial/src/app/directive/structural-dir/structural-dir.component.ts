import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
//Scenario 1: hide/show (inteernally created and delete element from DOM)

isDiv1Visible:boolean=true
isDiv2Visible:boolean=true
value1:string=""
value2:string=""
isActiveDiv:boolean=false;
matchedAlphabet:string="ABC"
cityArray:string[]=["pune","delhi","mumbai","Bangalore"]
studentList:any[]=[{id:1,name:"vikram",age:30},
  {id:2,name:"shubham",age:24},
  {id:3,name:"prasad",age:28},
];

employeeList:any[]=[{id:1,name:'navneet',gender:'female',lastname:'anand',status:false,totalMarks:90},
  {id:2,name:'vikram',lastname:'pandey',gender:'femmale',status:true,totalMarks:60},
  {id:3,name:'shubham',lastname:'sharma',gender:'male',status:false,totalMarks:70},
  {id:4,name:'prasad',lastname:'verma',gender:'male',status:true,totalMarks:50},
]

showDiv1(){
this.isDiv1Visible=true
}
hideDiv1(){
this.isDiv1Visible=false
}

toggle(){
  this.isDiv2Visible=!this.isDiv2Visible   //good way

  // if (this.isDiv2Visible==false){
  //   this.isDiv2Visible=true
  // }                                      //basic logic
  // else{
  //   this.isDiv2Visible=false
  // }
}






}
