import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { MentorComponent } from './components/mentor/mentor.component';
import { EventoComponent } from './components/evento/evento.component';
import { PasantiaComponent } from './components/pasantia/pasantia.component';
import { ArticulosComponent } from './articulos/articulos.component';
//import { inject } from '@angular/core/testing';
import { Inject } from '@angular/core';

const estaLogueado = () => {
  return localStorage.getItem('usuario') !== null
    ? true
    : Inject(Router).createUrlTree(['/login']);
};

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [estaLogueado] },
  { path: 'usuarios', component: UsuarioComponent, canActivate: [estaLogueado] },
  { path: 'estudiantes', component: EstudianteComponent, canActivate: [estaLogueado] },
  { path: 'mentores', component: MentorComponent, canActivate: [estaLogueado] },
  { path: 'eventos', component: EventoComponent, canActivate: [estaLogueado] },
  { path: 'pasantias', component: PasantiaComponent, canActivate: [estaLogueado] },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'articulos/:categoria', component: ArticulosComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // ← siempre al final
  { path: '**', redirectTo: 'login' }                    // ← rutas no encontradas
];
