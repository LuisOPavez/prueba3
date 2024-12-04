import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public titulo: string = 'Log-In';

  constructor() {}

  ngOnInit() {}

  onCreateAccountClick() {
    console.log('Botón "Crear una cuenta" presionado');
    // Aquí puedes manejar la lógica para la navegación
  }

  onLoginButtonClick() {
    console.log('Botón "Iniciar Sesión" presionado');
    // Aquí puedes manejar la lógica para iniciar sesión
  }
}
