import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service'; // Caminho para o serviço

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  account = { name: '', age: null, accountHolder: '', accountNumber: '', balance: null };

  constructor(private clientService: ClientService) {}

  createAccount() {
    this.clientService.addClient(this.account).subscribe(
      (response) => {
        console.log('Account created successfully', response);
      },
      (error) => {
        console.error('Error creating account', error);
      }
    );
  }
}