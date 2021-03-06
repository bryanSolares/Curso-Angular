import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Capitán América';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;

  heroe = {
    nombre: 'logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Llego la data");
    }, 4500);
  });

  fecha:Date = new Date();

  idioma:string = "es";

  nombre2 = "BryAn JoSue SoLaREs";

  videoUrl:string = "https://www.youtube.com/embed/n3wL-_ptXew";

  activar: boolean = true;

}
