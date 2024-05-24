import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirecciondetailsComponent } from './direcciondetails.component';

describe('DirecciondetailsComponent', () => {
  let component: DirecciondetailsComponent;
  let fixture: ComponentFixture<DirecciondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirecciondetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirecciondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
