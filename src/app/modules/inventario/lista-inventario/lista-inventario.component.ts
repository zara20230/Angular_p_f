import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; // Opcional, si necesitas paginación
import { MatSortModule } from '@angular/material/sort'; // Opcional, si necesitas ordenación

@Component({
  selector: 'app-lista-inventario',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    // Importa MatPaginatorModule y MatSortModule si los necesitas
  ],
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.scss']
})
export class ListaInventarioComponent {
  inventario = [
    { producto: 'Producto 1', cantidad: 10, precio: 20 },
    { producto: 'Producto 2', cantidad: 15, precio: 35 },
  ];

  displayedColumns: string[] = ['producto', 'cantidad', 'precio'];
}
