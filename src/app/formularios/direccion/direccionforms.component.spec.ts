import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionformsComponent } from './direccionforms.component';

describe('DireccionformsComponent', () => {
  let component: DireccionformsComponent;
  let fixture: ComponentFixture<DireccionformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccionformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
