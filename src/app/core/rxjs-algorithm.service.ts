import { Injectable } from '@angular/core';
import { of, interval, from } from 'rxjs';
import { map, filter, switchMap, catchError, mergeMap, toArray } from 'rxjs/operators';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class RxjsAlgorithmService {
  constructor() {}

  filterAndMapData(data: Item[]) {
    return of(data).pipe(
      filter((items: Item[]) => items.some(item => item.isActive)),
      map((items: Item[]) => items.map(item => ({ ...item, transformed: true })))
    );
  }

  pollingExample() {
    return interval(1000).pipe(
      switchMap(() => {
        return of({ data: 'Nuevo dato' });
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
  
  fetchItems(ids: number[]) {
    const fetchItemById = (id: number) => {
      return of({ id, data: `Item ${id}` }).pipe(
        map(item => ({ ...item, fetched: true }))
      );
    };

    return from(ids).pipe(
      mergeMap(id => fetchItemById(id)),
      toArray()
    );
  }
}
