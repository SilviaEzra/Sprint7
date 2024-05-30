import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaNavesComponent } from './lista-naves/lista-naves.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FichaNaveComponent } from './ficha-nave/ficha-nave.component';
import { AuthGuard } from '../../auth.guard';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: ListaNavesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'nave/:id', component: FichaNaveComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
