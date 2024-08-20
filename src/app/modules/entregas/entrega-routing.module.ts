import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionarEntregaComponent } from './seleccionar-entrega/seleccionar-entrega.component';
import { SeguimientoEntregaComponent } from './seguimiento-entrega/seguimiento-entrega.component';

const routes: Routes = [
  { path: 'entregas', component: SeleccionarEntregaComponent },
  { path: 'entregas/seguimiento', component: SeguimientoEntregaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregasRoutingModule {}
