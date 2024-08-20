import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarEntregaComponent } from './seleccionar-entrega.component';

describe('SeleccionarEntregaComponent', () => {
  let component: SeleccionarEntregaComponent;
  let fixture: ComponentFixture<SeleccionarEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeleccionarEntregaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionarEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
