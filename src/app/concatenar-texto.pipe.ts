import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenarTexto'
})
export class ConcatenarTextoPipe implements PipeTransform {

  transform(value: unknown, ...args: string[]): unknown {
    console.log(args)
    if(args[0]){
      return value + args[0];
    }
    return value+ "Hola mundo";
  }

}
