import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationEnd,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { MentorComponent } from './components/mentor/mentor.component';
import { EventoComponent } from './components/evento/evento.component';
import { PasantiaComponent } from './components/pasantia/pasantia.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    UsuarioComponent,
    EstudianteComponent,
    MentorComponent,
    EventoComponent,
    PasantiaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostrarLayout = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Si estamos en /login ocultamos header y footer
        this.mostrarLayout = event.url !== '/login';
      }
    });
  }
}
