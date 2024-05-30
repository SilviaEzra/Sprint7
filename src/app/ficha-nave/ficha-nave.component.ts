import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-ficha-nave',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
  templateUrl: './ficha-nave.component.html',
  styleUrls: ['./ficha-nave.component.css']
})
export class FichaNaveComponent implements OnInit {
  nave: any;
  imageUrl: string = '';

  constructor(private route: ActivatedRoute, private starwarsService: StarwarsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.starwarsService.getNaveById(id).subscribe(
        response => {
          this.nave = response;
          this.imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
        },
        error => {
          console.error('Error fetching nave details', error);
        }
      );
    }
  }

  onImageError(event: any): void {
    event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
  }
}
