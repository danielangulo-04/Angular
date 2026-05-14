import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario, UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Login
  loginEmail: string = '';
  loginPassword: string = '';
  errorLogin: string = '';

  // Registro
  registerNombre: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  registerConfirm: string = '';
  errorRegister: string = '';
  exitoRegister: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  onLogin(event: Event) {
    event.preventDefault();
    this.errorLogin = '';

    if (!this.loginEmail || !this.loginPassword) {
      this.errorLogin = '⚠️ Por favor completa todos los campos';
      return;
    }

    this.usuarioService.login(this.loginEmail, this.loginPassword).subscribe({
      next: (usuario : Usuario) => {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.router.navigate(['/home']);
      },
      error: () => {
        this.errorLogin = '❌ Email o contraseña incorrectos';
      }
    });
  }

  onRegister(event: Event) {
    event.preventDefault();
    this.errorRegister = '';
    this.exitoRegister = '';

    if (!this.registerNombre || !this.registerEmail || !this.registerPassword) {
      this.errorRegister = '⚠️ Por favor completa todos los campos';
      return;
    }

    if (this.registerPassword !== this.registerConfirm) {
      this.errorRegister = '❌ Las contraseñas no coinciden';
      return;
    }

    this.usuarioService.guardar({
      nombre: this.registerNombre,
      email: this.registerEmail,
      password: this.registerPassword,
      rol: 'estudiante'
    }).subscribe({
      next: () => {
        this.exitoRegister = '✅ Cuenta creada correctamente, ya puedes iniciar sesión';
        this.registerNombre = '';
        this.registerEmail = '';
        this.registerPassword = '';
        this.registerConfirm = '';
        setTimeout(() => this.toggleForm('login'), 2000);
      },
      error: () => {
        this.errorRegister = '❌ Error al crear la cuenta, intenta de nuevo';
      }
    });
  }

  toggleForm(tipo: string) {
    const container = document.getElementById('container');
    if (tipo === 'register') {
      container?.classList.add('active');
    } else {
      container?.classList.remove('active');
    }
  }
}
