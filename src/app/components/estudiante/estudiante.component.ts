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

  nuevoEstudiante: Estudiante = {
    nombre: '',
    carrera: '',
    edad: null as any
  };

  mensajeExito = '';

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {

    this.estudianteService.obtenerTodos().subscribe({

      next: (data) => {
        this.estudiantes = data;
      },

      error: (err) => {
        console.error('ERROR AL CARGAR:', err);
      }

    });

  }

  guardar(): void {

    if (
      !this.nuevoEstudiante.nombre ||
      !this.nuevoEstudiante.carrera ||
      !this.nuevoEstudiante.edad
    ) {
      alert('Completa todos los campos');
      return;
    }

    this.estudianteService.guardar(this.nuevoEstudiante).subscribe({

      next: () => {

        this.mensajeExito = '✅ Estudiante registrado';

        this.nuevoEstudiante = {
          nombre: '',
          carrera: '',
          edad: null as any
        };

        this.cargarEstudiantes();

        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);

      },

      error: (err) => {
        console.error('ERROR AL GUARDAR:', err);
      }

    });

  }

  eliminar(id: any): void {

    this.estudianteService.eliminar(id).subscribe(() => {
      this.cargarEstudiantes();
    });

  }

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
