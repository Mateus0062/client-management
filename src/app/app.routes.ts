import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redireciona para a Home por padrão
    { path: 'home', component: HomeComponent },  // Rota para Home
    { path: 'login', component: LoginComponent },  // Rota para Login
];
