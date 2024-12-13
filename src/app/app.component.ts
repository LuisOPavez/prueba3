import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {}

  // Método para invocar clearPreferences desde un botón
  clearAllPreferences() {
    this.authService.clearPreferences();
  }

  // Método para cerrar sesión
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
