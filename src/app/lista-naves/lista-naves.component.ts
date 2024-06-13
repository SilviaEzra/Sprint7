import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarwarsService } from '../starwars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-naves',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-naves.component.html',
  styleUrls: ['./lista-naves.component.css']
})
export class ListaNavesComponent implements OnInit {
  data: any[] = [];
  showLoadMoreButton: boolean = true; // Bandera para controlar la visibilidad del botón "Ver más"
  currentPage: number = 1;

  constructor(private starwarsService: StarwarsService, private router: Router) {}

  ngOnInit(): void {
    // Cargar naves solo cuando se inicializa el componente
    this.loadNaves();
  }

  loadNaves(): void {
    this.starwarsService.getData(this.currentPage).subscribe(
      response => {
        this.data = this.data.concat(response.results);
        console.log('Número de naves cargadas:', this.data.length);
        this.currentPage++;
      },
      error => {
        console.error('Error fetching data', error);
        this.showLoadMoreButton = false; // Ocultar el botón "Ver más" en caso de error
      }
    );
  }

  onLoadMore(): void {
    // Cargar más naves cuando se hace clic en el botón "Ver más"
    this.loadNaves();
  }

  goToNave(starship: any): void {
    const id = this.getIdFromUrl(starship.url); 
    this.router.navigate(['/nave', id]);
  }

  private getIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }
}
