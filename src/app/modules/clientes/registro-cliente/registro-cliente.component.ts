import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar [(ngModel)]
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule para usar matInput
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule para usar mat-form-field
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule para usar mat-raised-button

@Component({
  selector: 'app-registro-cliente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent {
  nuevoCliente = {
    nombre: '',
    dni: '',
    email: '',
    direccion: ''
  };

  onSubmit() {
    console.log('Cliente registrado:', this.nuevoCliente);
    // Aquí puedes añadir la lógica para manejar el registro del cliente.
  }
}
