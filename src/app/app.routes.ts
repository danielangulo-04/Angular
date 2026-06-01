import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { MentorComponent } from './components/mentor/mentor.component';
import { EventoComponent } from './components/evento/evento.component';
import { PasantiaComponent } from './components/pasantia/pasantia.component';

const estaLogueado = () => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  // Verifica que estamos en el navegador antes de usar localStorage
  if (isPlatformBrowser(platformId)) {
    return localStorage.getItem('usuario') !== null
      ? true
      : router.createUrlTree(['/login']);
  }
  return router.createUrlTree(['/login']);
};

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [estaLogueado] },
 // { path: 'usuarios', component: UsuarioComponent, canActivate: [estaLogueado] },
  { path: 'estudiantes', component: EstudianteComponent, canActivate: [estaLogueado] },
  { path: 'mentores', component: MentorComponent, canActivate: [estaLogueado] },
  { path: 'eventos', component: EventoComponent, canActivate: [estaLogueado] },
  { path: 'pasantias', component: PasantiaComponent, canActivate: [estaLogueado] },
  { path: 'categorias', component: CategoriasComponent, canActivate: [estaLogueado] },
  { path: 'articulos/:categoria', component: ArticulosComponent, canActivate: [estaLogueado] },
  { path: 'articulos', component: ArticulosComponent, canActivate: [estaLogueado] },
  { path: 'ayuda', component: AyudaComponent, canActivate: [estaLogueado] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
