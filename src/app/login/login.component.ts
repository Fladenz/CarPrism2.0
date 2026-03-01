import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit() {
    alert('Login efetuado com sucesso!');
    this.router.navigate(['/']);
  }

  close() {
    this.router.navigate(['/']);
  }

  onOverlayClick(e: Event) {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }
}
