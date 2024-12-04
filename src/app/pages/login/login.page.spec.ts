import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Iniciar Sesión" button', () => {
    const buttonElement = fixture.debugElement.query(By.css('ion-button[color="primary"]'));
    expect(buttonElement.nativeElement.textContent).toContain('Iniciar Sesión');
  });

  it('should display "Crear una cuenta" button', () => {
    const createAccountButton = fixture.debugElement.query(By.css('ion-button[color="light"]'));
    expect(createAccountButton.nativeElement.textContent).toContain('Crear una cuenta');
  });

  it('should call onCreateAccountClick when "Crear una cuenta" button is clicked', () => {
    spyOn(component, 'onCreateAccountClick').and.callThrough();
    const createAccountButton = fixture.debugElement.query(By.css('ion-button[color="light"]')).nativeElement;

    createAccountButton.click();
    expect(component.onCreateAccountClick).toHaveBeenCalled();
  });

  it('should call onLoginButtonClick when "Iniciar Sesión" button is clicked', () => {
    spyOn(component, 'onLoginButtonClick').and.callThrough();
    const loginButton = fixture.debugElement.query(By.css('ion-button[color="primary"]')).nativeElement;

    loginButton.click();
    expect(component.onLoginButtonClick).toHaveBeenCalled();
  });
});
