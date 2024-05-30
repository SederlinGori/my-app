import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesformsComponent } from './clientesforms.component';

describe('ClientesformsComponent', () => {
  let component: ClientesformsComponent;
  let fixture: ComponentFixture<ClientesformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
