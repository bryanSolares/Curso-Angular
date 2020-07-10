import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: ` <p>hola desde usuario nuevo</p> `,
  styles: [],
})
export class UsuarioNuevoComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe((parametros) => {
      console.log('RUTA HIJA NUEVO USUARIO', parametros);
    });
  }

  ngOnInit(): void {}
}
