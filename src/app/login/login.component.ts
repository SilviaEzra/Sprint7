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
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Suscribirse a los cambios en los campos de entrada para restablecer el errorMessage
    this.loginForm.get('email')?.valueChanges.subscribe(() => {
      this.errorMessage = null;
    });

    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      this.errorMessage = null;
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          console.log('Login successful. Redirecting to the home page...');
          const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
          this.authService.redirectUrl = null; // Clear the redirect URL
          this.router.navigate([redirectUrl]);
        },
        error: (err) => {
          console.error('Error during login: ', err);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      });
    } else {
      console.log('Invalid login form. Cannot proceed with login.');
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
}
