import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redireciona para a Home por padrão
    { path: 'home', component: HomeComponent },  // Rota para Home
    { path: 'login', component: LoginComponent },  // Rota para Login
    { path: 'create-account', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }