import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface GarageCar {
  id: number;
  title: string;
  specs: string;
  image: string;
}

@Component({
  selector: 'app-garagem',
  standalone: true,
  imports: [CommonModule, RouterLink],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './garagem.component.html',
  styleUrls: ['./garagem.component.css']
})
export class GaragemComponent {
  cars: GarageCar[] = [
    {
      id: 1,
      title: 'Chevrolet Corvette',
      specs: 'Stingray • 495cv • 2024',
      image:
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Porsche Panamera',
      specs: 'Turbo S • 630cv • 2023',
      image:
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Tesla Model S',
      specs: 'Plaid • 1020cv • Elétrico',
      image:
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  searchTerm = '';

  constructor(private router: Router) {}

  get filteredCars(): GarageCar[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.cars;
    }

    return this.cars.filter((car) =>
      `${car.title} ${car.specs}`.toLowerCase().includes(term)
    );
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
  }

  openDetails(id: number): void {
    this.router.navigate(['/visualizacao', id]);
  }
}
