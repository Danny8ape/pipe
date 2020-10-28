import { SlicePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringMayus'
})
export class StringMayusPipe implements PipeTransform {

  transform(palabra: String): String {
    let primeraMayus = palabra.split(" ");
    let resultado = "";
    
    for (let index = 0; index < primeraMayus.length; index++) {
     let temporal = primeraMayus[index];
     resultado = resultado + temporal.charAt(0).toUpperCase() + temporal.slice(1) + " ";
    }
    return resultado;

}
}
