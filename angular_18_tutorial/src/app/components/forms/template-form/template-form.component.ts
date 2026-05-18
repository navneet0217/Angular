import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
 studentDetails:any={
  firstName:'',
  lastName:'',
  userName:'',
  city:'',
  state:'',
  zip:'',
  isCheckTerms:false

 }
 formValue:any;
 constructor(){

 }

  resetForm(){
    this.studentDetails={
      firstName:'',
  lastName:'',
  userName:'',
  city:'',
  state:'',
  zip:'',
  isCheckTerms:false
    }
  }

  onSubmit(form: any) {
  // if (form.invalid) {
  //   console.log("Form Invalid");
  //   return;
  // }
  // this.formValue=form.value;

  // console.log("Form Submitted", this.studentDetails);
  debugger
  this.formValue=this.studentDetails
}
}
