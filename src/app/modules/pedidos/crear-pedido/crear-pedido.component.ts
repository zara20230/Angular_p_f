import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-crear-pedido',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './crear-pedido.component.html',
  styleUrls: ['./crear-pedido.component.scss']
})
export class CrearPedidoComponent {
  nuevoPedido = {
    cliente: '',
    detalle: '',
    cantidad: 0
  };

  onSubmit() {
    console.log('Pedido creado:', this.nuevoPedido);
  }
}
