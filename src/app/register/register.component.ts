import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class RegisterComponent {
  registerForm: FormGroup;
  @Output() registrationSuccess: EventEmitter<void> = new EventEmitter<void>();
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          console.log('Registration successful. Redirecting to login page...');
          this.router.navigate(['/login']);
        },
        error: (err) => console.error('Error during registration: ', err)
      });
    } else {
      console.log('Invalid registration form. Cannot proceed with registration.');
    }
    this.registrationSuccess.emit();
  }
}
