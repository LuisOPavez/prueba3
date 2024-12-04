import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onRegister when "Registrarse" button is clicked', () => {
    // Espiar el método onRegister
    spyOn(component, 'onRegister');

    // Buscar el botón "Registrarse" usando un selector CSS más específico para asegurar que encontramos el botón correcto
    const registerButton = fixture.debugElement.query(By.css('ion-button[expand="full"]')).nativeElement;

    // Simular el clic en el botón
    registerButton.click();

    // Verificar que se haya llamado al método onRegister
    expect(component.onRegister).toHaveBeenCalled();
  });
});
