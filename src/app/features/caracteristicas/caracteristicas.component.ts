import { Component, OnInit } from '@angular/core';
import { RxjsAlgorithmService } from '../../core/rxjs-algorithm.service';
import { Item } from '../../core/item.model';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent implements OnInit {
  items: Item[] = [];
  transformedItems: Item[] = [];
  errorResult: any;

  constructor(private rxjsAlgorithmService: RxjsAlgorithmService) {}

  ngOnInit(): void {
    // Usar los métodos del servicio
    this.rxjsAlgorithmService.filterAndMapData(this.items).subscribe(result => {
      this.transformedItems = result;
    });

    this.rxjsAlgorithmService.handleErrorExample().subscribe(result => {
      this.errorResult = result;
    });
  }
}
