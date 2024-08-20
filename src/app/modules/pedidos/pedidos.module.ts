import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ListaPedidosComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    ListaPedidosComponent,
  ]
})
export class PedidosModule { }
