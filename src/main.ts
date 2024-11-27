import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { ClientsComponent } from './app/pages/clients/clients.component';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';
import { CreateAccountComponent } from './app/pages/create-account/create-account.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'create-account', component: CreateAccountComponent }
    ]),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,  
    },
  ],
}).catch(err => console.error(err));

