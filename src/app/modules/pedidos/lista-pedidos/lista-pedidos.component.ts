import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  pedidos: any[] = [];
  displayedColumns: string[] = ['id', 'cliente', 'estado'];

  constructor() { }

  ngOnInit(): void {
    this.pedidos = [
      { id: 1, cliente: 'Cliente 1', estado: 'Pendiente' },
      { id: 2, cliente: 'Cliente 2', estado: 'Enviado' },
    ];
  }
}
