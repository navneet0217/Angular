import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //string,number,boolean,date

  courseName: string = "Angular 18";
  courseNameSecond:string="NodeJS";
  releaseYear: number = 2025;

  isActive: boolean = true;
  isWorking:boolean =true;

  releaseDate: Date = new Date();

  inputType="radio"

  rollNo:number=123456;

  myClassName:string='bg-primary'

  //new thing which is introduced is signal

  firstName=signal("John Doe")


  constructor(){
    
  }

  showAlert(message:string){
    alert(`Hello ${message}`);
  }

  changeCourseName(){
    this.courseName="Angular 19"
    
  }
  changeName(){
    this.firstName.set("Jane Doe")
  }

}
