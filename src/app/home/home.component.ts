import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carImages: string[] = [
    'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop'
  ];

  currentIndex = 0;
  imageLoaded = false;

  constructor(private router: Router) {}

  get currentImage() {
    return this.carImages[this.currentIndex];
  }

  prevImage() {
    this.currentIndex = (this.currentIndex === 0) ? this.carImages.length - 1 : this.currentIndex - 1;
    this.imageLoaded = false;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex === this.carImages.length - 1) ? 0 : this.currentIndex + 1;
    this.imageLoaded = false;
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  goLogin() {
    this.router.navigate([{ outlets: { login: ['modal-login'] } }]);
  }

  goRegister() {
    this.router.navigate([{ outlets: { register: ['modal-register'] } }]);
  }
}

