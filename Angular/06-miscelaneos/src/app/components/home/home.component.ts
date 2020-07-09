import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <p>hola mundo desde app.component</p>

    <app-clases></app-clases>
    <hr />
    <p [appResaltado]="'black'">Hola Mundo</p>
    <hr />
    <app-ng-swith></app-ng-swith>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
