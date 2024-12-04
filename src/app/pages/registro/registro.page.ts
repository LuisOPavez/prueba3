import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  constructor() { }

  ngOnInit() {}

  onRegister() {
    console.log('Botón "Registrarse" presionado');
    // Aquí puedes manejar la lógica para el registro, como llamada a una API o validación
  }
}
