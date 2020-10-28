import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {

  transform(numero: number): String {
    let number = numero;
    let cuadrado = number * number;
    return "Resultado: "+cuadrado;
  }

}
