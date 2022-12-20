import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addprefix',
})
export class CustomPipe implements PipeTransform {
  transform(value: any, args: any = '@@@') {
    return args + value + args;
  }
}
