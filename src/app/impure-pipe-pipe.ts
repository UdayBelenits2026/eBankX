import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
})
export class ImpurePipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return new Date().toLocaleTimeString();
  }
}
