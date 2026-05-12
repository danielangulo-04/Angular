import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasantiaService, Pasantia } from '../../services/pasantia.service';

@Component({
  selector: 'app-pasantia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pasantia.component.html',
  styleUrls: ['./pasantia.component.css']
})
export class PasantiaComponent implements OnInit {
  pasantias: Pasantia[] = [];
  nuevaPasantia: Pasantia = { empresa: '', area: '', descripcion: '', modalidad: '', ciudad: '' };
  mensajeExito: string = '';

  constructor(private pasantiaService: PasantiaService) {}

  ngOnInit() { this.cargarPasantias(); }

  cargarPasantias() {
    this.pasantiaService.obtenerTodos().subscribe(data => {
      this.pasantias = data;
    });
  }

  guardar() {
    this.pasantiaService.guardar(this.nuevaPasantia).subscribe(() => {
      this.mensajeExito = '✅ Pasantía guardada correctamente';
      this.nuevaPasantia = { empresa: '', area: '', descripcion: '', modalidad: '', ciudad: '' };
      this.cargarPasantias();
      setTimeout(() => this.mensajeExito = '', 3000);
    });
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar esta pasantía?')) {
      this.pasantiaService.eliminar(id).subscribe(() => {
        this.cargarPasantias();
      });
    }
  }
}
