import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesfiltradosComponent } from './components/heroesfiltrados/heroesfiltrados.component';

const APP_ROUTES: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'heroes', component:  HeroesComponent},
  { path: 'heroes/:termino', component:  HeroesfiltradosComponent},
  { path: 'heroe/:Id', component:  HeroeComponent},
  { path: 'about', component:  AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)