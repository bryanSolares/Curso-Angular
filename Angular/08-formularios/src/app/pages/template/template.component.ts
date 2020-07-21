import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: 'Bryan',
    apellido: 'Solares',
    correo: 'solares.josue@outlook.com',
  };

  constructor() {}

  ngOnInit(): void {}

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
