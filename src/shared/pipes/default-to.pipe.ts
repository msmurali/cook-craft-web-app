import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultTo',
})
export class DefaultToPipe implements PipeTransform {
  transform(value: any, defaultValue: any) {
    if (value === undefined || value === null) {
      return defaultValue;
    }
    return value;
  }
}
