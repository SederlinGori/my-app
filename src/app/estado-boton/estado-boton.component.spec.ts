import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoBotonComponent } from './estado-boton.component';

describe('EstadoBotonComponent', () => {
  let component: EstadoBotonComponent;
  let fixture: ComponentFixture<EstadoBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoBotonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
