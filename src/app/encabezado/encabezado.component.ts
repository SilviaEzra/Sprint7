import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent, RegisterComponent],
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit { 

  @Input() registerForm: FormGroup = new FormGroup({});
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();

    this.authService.loginSuccess.subscribe(() => {
      this.isLoggedIn = true;
    });
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

  // Puedes eliminar este método si no lo necesitas
  onRegistrationSuccess() {
    console.log('Registration successful');
    localStorage.clear();
    this.router.navigate(['/login'])
  } 
}
