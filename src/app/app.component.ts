import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AuthGuard } from '../../auth.guard';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    EncabezadoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthGuard]
})
export class AppComponent implements OnInit {

  constructor(private authGuard: AuthGuard) {} // Inject AuthGuard

  ngOnInit(): void {
    console.log('App component initialized');
  }
}
