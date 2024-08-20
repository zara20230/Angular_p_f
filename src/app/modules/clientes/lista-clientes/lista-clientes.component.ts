import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  clientes: any[] = [];
  displayedColumns: string[] = ['nombre', 'dni', 'email'];

  constructor() { }

  ngOnInit(): void {
    this.clientes =[
      { inombre: 'ruben', dni: '12345678', email: 'ruben@gmail.com' },
      { nombre: 'antonio', dni: '987654321', email: 'zapata@gmail.com' },
    ];
  }
}
