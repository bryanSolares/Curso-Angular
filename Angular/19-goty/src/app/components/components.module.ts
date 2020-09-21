import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoBarraHorizontalComponent } from './grafico-barra-horizontal/grafico-barra-horizontal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [GraficoBarraHorizontalComponent, NavbarComponent],
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
     GraficoBarraHorizontalComponent, NavbarComponent
  ]
})
export class ComponentsModule { }
