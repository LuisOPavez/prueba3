import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuienesSomosPage } from './quienes-somos.page';

describe('QuienesSomosPage', () => {
  let component: QuienesSomosPage;
  let fixture: ComponentFixture<QuienesSomosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuienesSomosPage]
    }).compileComponents();

    fixture = TestBed.createComponent(QuienesSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
