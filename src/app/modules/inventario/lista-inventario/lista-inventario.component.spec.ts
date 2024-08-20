import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInventarioComponent } from './lista-inventario.component';

describe('ListaInventarioComponent', () => {
  let component: ListaInventarioComponent;
  let fixture: ComponentFixture<ListaInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInventarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
