import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscadorTarea } from './buscador-tarea';

describe('BuscadorTarea', () => {
  let component: BuscadorTarea;
  let fixture: ComponentFixture<BuscadorTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorTarea],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorTarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
