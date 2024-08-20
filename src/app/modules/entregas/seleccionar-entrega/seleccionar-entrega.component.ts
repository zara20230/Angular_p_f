import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio'; // Importa MatRadioModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule para [(ngModel)]

@Component({
  selector: 'app-seleccionar-entrega',
  standalone: true,
  imports: [
    CommonModule,
    MatRadioModule, // Asegúrate de incluir MatRadioModule
    FormsModule // Asegúrate de incluir FormsModule para [(ngModel)]
  ],
  templateUrl: './seleccionar-entrega.component.html',
  styleUrls: ['./seleccionar-entrega.component.scss']
})
export class SeleccionarEntregaComponent {
  metodoEntrega: string = 'domicilio'; // Valor inicial

  confirmarEntrega() {
    // Aquí iría la lógica para manejar la confirmación de la entrega
    console.log('Método de entrega seleccionado:', this.metodoEntrega);
  }
}
