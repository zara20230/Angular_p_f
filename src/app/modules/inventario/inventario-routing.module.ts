import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInventarioComponent } from './lista-inventario/lista-inventario.component';
import { DetalleInventarioComponent } from './detalle-inventario/detalle-inventario.component';

const routes: Routes = [
  { path: 'inventario', component: ListaInventarioComponent },
  { path: 'inventario/:id', component: DetalleInventarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}
