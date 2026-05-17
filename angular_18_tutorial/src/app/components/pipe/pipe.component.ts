import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from './custom-pipe.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe ,LowerCasePipe,TitleCasePipe,DatePipe ,JsonPipe,CustomPipePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName:string="navneet"
  filmTitle:string = "pirates of the carrebian"
  currentDate:Date=new Date();
  
  studentDetail:any={
    id:1,
    name:'navneet',
    age:25,
    city:'surat',
    gender:'male',
    salary:50000,
    state:''
  }


}
