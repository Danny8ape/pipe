import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'implements'
})
export class ImplementsPipe implements PipeTransform {

  transform(date : Date): String {
    let actualDate = new Date();
    let tempdate = new Date(date);
    let diferencia = Math.abs(actualDate.getTime()-tempdate.getTime());
    console.log(date , tempdate)
    if(diferencia<=3600000){
      return "Conectado hace pocos minutos."
    }
    if(diferencia<=21600000){
      return "Conectado hace pocas horas."
    }
    if(diferencia<=43200000){
      return "Conectado hace menos de 12 horas"
    }
    if(diferencia<=86400000){
      return "Conectado hace menos de 24 horas."
    }
    if(diferencia<=2629800000){
      return "Conectado este mes."
    }
    if(diferencia<=5259600000){
      return "Conectado el mes pasado."
    }
    if(diferencia<=31557600000){
    return "Conectado este año.";
    }
    return "Conectado hace años.";
  }

}
