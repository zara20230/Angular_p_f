import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';

const routes: Routes = [
  { path: 'pedidos', component: ListaPedidosComponent },
  { path: 'pedidos/crear', component: CrearPedidoComponent },
  { path: 'pedidos/:id', component: DetallePedidoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosRoutingModule {}
