import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MentorService, Mentor } from '../../services/mentor.service';

@Component({
  selector: 'app-mentor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  mentores: Mentor[] = [];
  nuevoMentor: Mentor = { nombre: '', especialidad: '', experiencia: '', email: '', telefono: '' };
  mensajeExito: string = '';

  constructor(private mentorService: MentorService) {}

  ngOnInit() { this.cargarMentores(); }

  cargarMentores() {
    this.mentorService.obtenerTodos().subscribe(data => {
      this.mentores = data;
    });
  }

  guardar() {
    this.mentorService.guardar(this.nuevoMentor).subscribe(() => {
      this.mensajeExito = '✅ Mentor guardado correctamente';
      this.nuevoMentor = { nombre: '', especialidad: '', experiencia: '', email: '', telefono: '' };
      this.cargarMentores();
      setTimeout(() => this.mensajeExito = '', 3000);
    });
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar este mentor?')) {
      this.mentorService.eliminar(id).subscribe(() => {
        this.cargarMentores();
      });
    }
  }
}
