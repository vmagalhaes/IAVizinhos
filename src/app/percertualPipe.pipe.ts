import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'percertual'})
export class PercentualPipe implements PipeTransform {
  
  transform(value: any[]): string[] {
    value.forEach((v: number) => {
      let index = value.indexOf(v);

      if (index >= 0) {
        value.splice(index, 1, ` ${v * 100}%`);
      }
      console.log(value);
    });
    return value;
  }
}