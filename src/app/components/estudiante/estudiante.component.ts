import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EstudianteService, Estudiante } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})

export class EstudianteComponent implements OnInit {

  estudiantes: Estudiante[] = [];

  nuevoEstudiante: Estudiante = {
    nombre: '',
    carrera: '',
    edad: 0
  };

  mensajeExito: string = '';

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(): void {
    this.estudianteService.obtenerTodos().subscribe({
      next: (data) => {
        this.estudiantes = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  guardar(): void {

    if (
      !this.nuevoEstudiante.nombre ||
      !this.nuevoEstudiante.carrera ||
      this.nuevoEstudiante.edad <= 0
    ) {
      alert('Completa todos los campos');
      return;
    }

    this.estudianteService.guardar(this.nuevoEstudiante).subscribe({
      next: () => {

        this.mensajeExito = '✅ Estudiante guardado correctamente';

        this.nuevoEstudiante = {
          nombre: '',
          carrera: '',
          edad: 0
        };

        this.cargarEstudiantes();

        setTimeout(() => {
          this.mensajeExito = '';
        }, 3000);
      },

      error: (error) => {
        console.log(error);
      }
    });
  }

  eliminar(id: string): void {

    if (confirm('¿Eliminar estudiante?')) {

      this.estudianteService.eliminar(id).subscribe({
        next: () => {
          this.cargarEstudiantes();
        },

        error: (error) => {
          console.log(error);
        }
      });

    }
  }

}
