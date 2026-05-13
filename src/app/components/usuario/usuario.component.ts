import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuarios = [
    {
      nombre: 'Julian Rojas',
      correo: 'julian@gmail.com',
      rol: 'Administrador'
    },
    {
      nombre: 'Andersson Ruiz',
      correo: 'andersson@gmail.com',
      rol: 'Estudiante'
    },
    {
      nombre: 'Sofia Martinez',
      correo: 'sofia@gmail.com',
      rol: 'Mentor'
    }
  ];

  nuevoUsuario = {
    nombre: '',
    correo: '',
    password: '',
    rol: ''
  };

  agregarUsuario() {

    if (
      this.nuevoUsuario.nombre.trim() === '' ||
      this.nuevoUsuario.correo.trim() === '' ||
      this.nuevoUsuario.password.trim() === '' ||
      this.nuevoUsuario.rol.trim() === ''
    ) {
      alert('Completa todos los campos');
      return;
    }

    this.usuarios.push({
      nombre: this.nuevoUsuario.nombre,
      correo: this.nuevoUsuario.correo,
      rol: this.nuevoUsuario.rol
    });

    this.nuevoUsuario = {
      nombre: '',
      correo: '',
      password: '',
      rol: ''
    };
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1);
  }

}
