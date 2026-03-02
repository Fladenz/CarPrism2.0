import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface CarDetails {
  id: number;
  brand: string;
  model: string;
  price: string;
  image: string;
  acceleration: string;
  power: string;
  engine: string;
  description1: string;
  description2: string;
}

@Component({
  selector: 'app-visualizacao',
  standalone: true,
  imports: [CommonModule, RouterLink],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {
  car?: CarDetails;

  private readonly cars: CarDetails[] = [
    {
      id: 1,
      brand: 'CHEVROLET',
      model: 'Corvette Stingray',
      price: 'R$ 1.250.000',
      image:
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
      acceleration: '2.9s',
      power: '495 cv',
      engine: 'V8 6.2L',
      description1:
        'O Chevrolet Corvette Stingray redefine o conceito de performance americana. Com seu motor central V8 naturalmente aspirado, ele entrega uma experiência de direção visceral e precisa.',
      description2:
        'No interior, o cockpit envolve o motorista como um jato de combate, com acabamentos em fibra de carbono e couro premium. Tecnologia de ponta e conforto se unem para criar o grand tourer definitivo.'
    },
    {
      id: 2,
      brand: 'PORSCHE',
      model: 'Panamera Turbo S',
      price: 'R$ 1.180.000',
      image:
        'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop',
      acceleration: '3.1s',
      power: '630 cv',
      engine: 'V8 4.0L',
      description1:
        'O Porsche Panamera Turbo S combina luxo executivo com desempenho de superesportivo. Entrega aceleração imediata e estabilidade em alta velocidade.',
      description2:
        'A cabine premium integra tecnologia avançada, materiais refinados e conforto para viagens longas sem abrir mão da esportividade.'
    },
    {
      id: 3,
      brand: 'TESLA',
      model: 'Model S Plaid',
      price: 'R$ 890.000',
      image:
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2000&auto=format&fit=crop',
      acceleration: '2.1s',
      power: '1020 cv',
      engine: 'Elétrico Tri-Motor',
      description1:
        'O Tesla Model S Plaid é referência em aceleração entre sedans elétricos, com resposta instantânea e controle eletrônico avançado.',
      description2:
        'Seu interior minimalista une autonomia elevada, conectividade e um pacote completo de assistência à condução para uso diário e performance.'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.car = this.cars.find((item) => item.id === id) ?? this.cars[0];
    });
  }

  goBack(): void {
    this.router.navigate(['/garagem']);
  }
}
