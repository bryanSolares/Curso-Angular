import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
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
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  constructor() {
    console.log('Contructor');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(): void {
    console.log('OnChanges.....');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
