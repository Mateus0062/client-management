import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      data => this.clients = data,
      error => console.error('Erro ao carregar clientes:', error)
    );
  }

  updateClient(client: any) {
    // Lógica para editar cliente
    console.log('Updating client', client);
  }

  deleteClient(clientId: number) {
    // Lógica para excluir cliente
    console.log('Deleting client with id:', clientId);
  }
}