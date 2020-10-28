import { Component, OnInit } from '@angular/core';
import { NumeroPipe } from 'src/app/pipes/numero.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  date: Date;
  date2: Date;
  number: number;
  number2: number;
  palabra: String;
  palabra2: String;
  frase: String;
  frase2: String;
  constructor() { 
    this.date = new Date(2020, 9, 27, 17, 0, 0);
    this.date2 = new Date(2020, 1, 13, 5, 0, 0);
    this.number = 5;
    this.number2 = 8;
    this.palabra = "Implemente un pipe que permita poner primera mayuscula";
    this.palabra2 = "Cuando sientes que no hay nada que perder estás perdido";
    this.frase = "Hola como estas";
    this.frase2 = "Se te ha olvidado disfrutar del proceso y la vida es eso"
  }

  ngOnInit(): void {
  }

}
