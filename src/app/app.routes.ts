import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pedidos',
    loadChildren: () =>
      import('./modules/pedidos/pedidos.module').then(m => m.PedidosModule),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./modules/clientes/clientes.module').then(m => m.ClientesModule),
  },
  {
    path: 'inventario',
    loadChildren: () =>
      import('./modules/inventario/inventario.module').then(m => m.InventarioModule),
  },
  {
    path: 'entregas',
    loadChildren: () =>
      import('./modules/entregas/entregas.module').then(m => m.EntregasModule),
  },
  { path: '', redirectTo: '/pedidos', pathMatch: 'full' },
  { path: '**', redirectTo: '/pedidos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
