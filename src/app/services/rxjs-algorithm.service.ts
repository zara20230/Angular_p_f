import { Injectable } from '@angular/core';
import { of, interval } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class RxjsAlgorithmService {
  constructor() {}

  filterAndMapData(data: Item[]) {
    return of(data).pipe(
      switchMap(items => of(items)),
      map(items =>
        items.filter((item: Item) => item.isActive)
      ),
      map(items =>
        items.map(item => ({ ...item, transformed: true }))
      )
    );
  }

  pollingExample() {
    return interval(1000).pipe(
      switchMap(() => {
        const exampleItems: Item[] = [
          { isActive: true },
          { isActive: false },
          { isActive: true },
        ];
        return of(exampleItems);
      })
    );
  }

  handleErrorExample() {
    return of(null).pipe(
      switchMap(() => {
        throw new Error('Algo salió mal');
      }),
      catchError((error) => {
        console.error('Error capturado:', error);
        return of({ error: true });
      })
    );
  }
}
