import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; // Importar CommonModule si es standalone

@Component({
  selector: 'app-seguimiento-entrega',
  standalone: true,
  imports: [CommonModule, MatCardModule], // Importar los módulos necesarios
  templateUrl: './seguimiento-entrega.component.html',
  styleUrls: ['./seguimiento-entrega.component.scss']
})
export class SeguimientoEntregaComponent implements OnInit {
  entregas = [
    {
      pedidoId: 1,
      estado: 'En camino',
      direccion: 'Calle Ejemplo 123',
      fechaEstimada: new Date()
    },
    {
      pedidoId: 2,
      estado: 'Entregado',
      direccion: 'Avenida Test 456',
      fechaEstimada: new Date()
    }
  ];

  ngOnInit(): void {
    // Aquí puedes cargar los datos desde un servicio si es necesario
  }
}
