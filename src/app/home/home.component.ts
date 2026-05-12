import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

/**
 * Descripción: Componente que muestra la pantalla de inicio
 * Autor: Julian.
 * Fecha de creación: 10/05/2026
 */

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  irACategorias(categoria: string) {
    this.router.navigate(['/categorias'], { queryParams: { tipo: categoria } });

  }

}
