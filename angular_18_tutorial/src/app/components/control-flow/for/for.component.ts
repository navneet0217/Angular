import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  cityList:string[]=['Pune','Mumbai','Delhi','Ahmedabad']
  studentDetails:any=[{
   
    name:'sagar',
    rollNo:12132,
    course:'Maths'
  },
  {
    
    name:'sagar',
    rollNo:12132,
    course:'Maths'
  },
  {
    
    name:'sagar',
    rollNo:12132,
    course:'Maths'
  }]

  dayNumber:string=''

}
