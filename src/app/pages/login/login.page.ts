import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BiometricAuth, BiometryError, BiometryErrorType } from '@aparajita/capacitor-biometric-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    if (!this.email.trim() || !this.password.trim()) {
      alert('Correo y contraseña son obligatorios.');
      return;
    }

    try {
      if (!this.isMobileDevice()) {
        console.log('Simulando autenticación biométrica');
      } else {
        await BiometricAuth.authenticate({
          reason: 'Authenticate to login',
          cancelTitle: 'Cancel',
          iosFallbackTitle: 'Use passcode',
          androidTitle: 'Biometric login'
        });
      }

      const biometricHash = btoa(this.email.trim());
      const success = await this.authService.loginUser(this.email, this.password, biometricHash);

      if (success) {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/inicio']);
      } else {
        alert('Credenciales incorrectas.');
      }
    } catch (error) {
      if (error instanceof BiometryError) {
        if (error.code !== BiometryErrorType.userCancel) {
          alert(`Biometric authentication failed: ${error.message}`);
        }
      } else {
        alert('Error en la autenticación biométrica.');
      }
    }
  }

  // Función para detectar si se está ejecutando en un dispositivo móvil
  isMobileDevice(): boolean {
    return /Android|iPhone|iPad|iPod/.test(navigator.userAgent);
  }

  onRegister() {
    this.router.navigate(['/registro']);
  }
}
