import { Routes } from '@angular/router';
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

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'estudiantes', component: EstudianteComponent },
  { path: 'mentores', component: MentorComponent },
  { path: 'eventos', component: EventoComponent },
  { path: 'pasantias', component: PasantiaComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'articulos/:categoria', component: ArticulosComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // ← siempre al final
  { path: '**', redirectTo: 'login' }                    // ← rutas no encontradas
];
