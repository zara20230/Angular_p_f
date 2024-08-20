import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    ListaClientesComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    ListaClientesComponent,
  ]
})
export class ClientesModule { }
