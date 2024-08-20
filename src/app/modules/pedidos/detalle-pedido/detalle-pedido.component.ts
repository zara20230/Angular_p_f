import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-detalle-pedido',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss']
})
export class DetallePedidoComponent implements OnInit {
  pedidos: any[] = [];
  displayedColumns: string[] = ['id', 'pedido', 'estado'];

  constructor() { }

  ngOnInit(): void {
    this.pedidos = [
      { id: 1, pedido: 'pedido 1', estado: 'Pendiente' },
      { id: 2, pedido: 'pedido 2', estado: 'Enviado' },
    ];
  }

}
