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
  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate([{ outlets: { login: ['modal-login'] } }]);
  }

  goRegister() {
    this.router.navigate([{ outlets: { register: ['modal-register'] } }]);
  }
}

