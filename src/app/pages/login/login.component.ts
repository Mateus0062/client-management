import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.user, this.password).subscribe(
      response => {
        this.authService.storeToken(response.token);

        this.router.navigate(['/clients']);
      },
      error => {
        console.error('Erro ao fazer login:', error);
        alert('Usuário ou senha inválidos');
      }
    );
  }
}