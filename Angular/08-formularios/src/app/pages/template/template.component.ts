import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Bryan',
    apellido: 'Solares',
    correo: 'solares.josue@outlook.com',
    pais: 'GTM',
    genero: 'M'
  };

  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((paises) => {
      this.paises = paises;
      this.paises.unshift({ nombre: '[Seleccione Pais]', codigo: '' }); //agrega elemento a primera posición del arreglo
      console.log(paises);
    });
  }

  guardar(forma: NgForm) {
    if (forma.invalid) {
      Object.values(forma.controls).forEach((e) => {
        e.markAsTouched();
      });
      return;
    }
    console.log(forma);
    console.log(forma.value);
  }
}
