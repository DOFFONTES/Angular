import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'replace'
})
export class SubstituiPipe implements PipeTransform {
  // tslint:disable-next-line:typedef
  transform(value: string, char: string, novoValor: string) {
    return value.replace(char, novoValor).toLocaleUpperCase();
  }
}
