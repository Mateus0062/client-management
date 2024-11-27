import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken(); // Método para pegar o token do localStorage ou serviço de autenticação

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}` // Adiciona o token ao cabeçalho da requisição
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req); // Caso não haja token, a requisição segue sem o cabeçalho de autorização
  }
}