import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringMayusInter'
})
export class StringMayusInterPipe implements PipeTransform {

  transform(palabra: String): String {
    let mayusInter = palabra.split(" ");
    let resultado = "";
    let boolean = true;

    
    console.log(mayusInter);
    for (let i = 0; i < mayusInter.length; i++) {
      for (let j = 0; j < mayusInter[i].length; j++) {
        let temporal = mayusInter[i];
        if (boolean){
          resultado = resultado + temporal.charAt(j).toUpperCase();
          boolean = false;
        }else {
          resultado = resultado + temporal.charAt(j);
          boolean = true;
        }
      }
      resultado = resultado + " "; 
    }
    console.log(resultado)
    return resultado;
  }

}
