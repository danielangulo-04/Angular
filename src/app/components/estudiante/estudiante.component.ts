import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  nuevoEstudiante: Estudiante = { nombre: '', carrera: '', edad: 0 };
  mensajeExito: string = '';

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit() { this.cargarEstudiantes(); }

  cargarEstudiantes() {
    this.estudianteService.obtenerTodos().subscribe(data => {
      this.estudiantes = data;
    });
  }

  guardar() {
    this.estudianteService.guardar(this.nuevoEstudiante).subscribe(() => {
      this.mensajeExito = '✅ Estudiante guardado correctamente';
      this.nuevoEstudiante = { nombre: '', carrera: '', edad: 0 };
      this.cargarEstudiantes();
      setTimeout(() => this.mensajeExito = '', 3000);
    });
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar este estudiante?')) {
      this.estudianteService.eliminar(id).subscribe(() => {
        this.cargarEstudiantes();
      });
    }
  }
}
