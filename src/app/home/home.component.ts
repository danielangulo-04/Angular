import { Component } from '@angular/core';
import { Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  irACategorias(categoria: string) {
    this.router.navigate(['/categorias'], { queryParams: { tipo: categoria } });

  }

}
