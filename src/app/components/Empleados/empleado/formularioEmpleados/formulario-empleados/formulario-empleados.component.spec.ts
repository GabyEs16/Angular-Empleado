import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmpleadosComponent } from './formulario-empleados.component';

describe('FormularioEmpleadosComponent', () => {
  let component: FormularioEmpleadosComponent;
  let fixture: ComponentFixture<FormularioEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
