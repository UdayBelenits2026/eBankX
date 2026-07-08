import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'custompipes',
})
export class CustompipesPipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');
  transform(value: any, ...args: any[]): any {
    // return value? " +91 " + value:value;
    // if (value == null || value === undefined || value === ' ') {
    //   return 'Na';
    // }
    // return "+91 "+value;
   return this.datePipe.transform(value, 'mm/dd/yyyy');
  }
}
