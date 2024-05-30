import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
    if (this.authService.isAuthenticated()) {
      return true; // Permitir acceso
    } else {
      this.authService.redirectUrl = state.url; // Guardar URL de redirección
      this.router.navigate(['/login']);
      return false; // Denegar acceso
    }
  };
}
