import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onSubmit() {
    alert('Cadastro realizado!');
    this.router.navigate([{ outlets: { register: null } }]);
  }

  close() {
    this.router.navigate([{ outlets: { register: null } }]);
  }

  openLogin() {
    this.router.navigate([{ outlets: { register: null, login: ['login'] } }]);
  }
}
