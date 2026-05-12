import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService, Usuario } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = { nombre: '', email: '', password: '', rol: '' };
  mensajeExito: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuarioService.obtenerTodos().subscribe(data => {
      this.usuarios = data;
    });
  }

  guardar() {
    this.usuarioService.guardar(this.nuevoUsuario).subscribe(() => {
      this.mensajeExito = '✅ Usuario guardado correctamente';
      this.nuevoUsuario = { nombre: '', email: '', password: '', rol: '' };
      this.cargarUsuarios();
      setTimeout(() => this.mensajeExito = '', 3000);
    });
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuarioService.eliminar(id).subscribe(() => {
        this.cargarUsuarios();
      });
    }
  }
}
