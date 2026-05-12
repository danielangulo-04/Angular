import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventoService, Evento } from '../../services/evento.service';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  eventos: Evento[] = [];
  nuevoEvento: Evento = { nombre: '', fecha: '', lugar: '', descripcion: '', organizador: '' };
  mensajeExito: string = '';

  constructor(private eventoService: EventoService) {}

  ngOnInit() { this.cargarEventos(); }

  cargarEventos() {
    this.eventoService.obtenerTodos().subscribe(data => {
      this.eventos = data;
    });
  }

  guardar() {
    this.eventoService.guardar(this.nuevoEvento).subscribe(() => {
      this.mensajeExito = '✅ Evento guardado correctamente';
      this.nuevoEvento = { nombre: '', fecha: '', lugar: '', descripcion: '', organizador: '' };
      this.cargarEventos();
      setTimeout(() => this.mensajeExito = '', 3000);
    });
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar este evento?')) {
      this.eventoService.eliminar(id).subscribe(() => {
        this.cargarEventos();
      });
    }
  }
}
