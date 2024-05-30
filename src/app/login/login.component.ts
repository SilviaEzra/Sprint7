import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          console.log('Inicio de sesión exitoso. Redirigiendo al usuario a la página de inicio...');
          const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
          this.authService.redirectUrl = null; // Limpiar la URL de redirección
          this.router.navigate([redirectUrl]);
        },
        error: (err) => console.error('Error durante el inicio de sesión: ', err)
      });
    } else {
      console.log('Formulario de inicio de sesión inválido. No se puede iniciar sesión.');
    }
  }
}
