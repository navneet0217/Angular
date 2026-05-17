import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value!=null && value!=undefined && value!=""){
      return value;
    }else{
      return "N/A";
    }
  }

}
