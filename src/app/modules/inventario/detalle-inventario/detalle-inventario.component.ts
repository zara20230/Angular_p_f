import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule para mat-card
import { FormsModule } from '@angular/forms'; // Importa FormsModule si usas [(ngModel)] en otros casos

@Component({
  selector: 'app-detalle-inventario',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, // Asegúrate de incluir MatCardModule
  ],
  templateUrl: './detalle-inventario.component.html',
  styleUrls: ['./detalle-inventario.component.scss']
})
export class DetalleInventarioComponent {
  producto = {
    id: 1,
    nombre: 'Producto Ejemplo',
    cantidad: 50,
    precio: 123.45,
    descripcion: 'Descripción del producto.'
  };
}
