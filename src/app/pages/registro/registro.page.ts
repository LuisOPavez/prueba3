import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BiometricAuth, BiometryError, BiometryErrorType } from '@aparajita/capacitor-biometric-auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onRegister() {
    if (!this.email.trim() || !this.password.trim() || !this.confirmPassword.trim()) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      // Simulación para desarrollo en el navegador
      if (!this.isMobileDevice()) {
        console.log('Simulando autenticación biométrica');
      } else {
        await BiometricAuth.authenticate({
          reason: 'Register biometric data',
          cancelTitle: 'Cancel',
          iosFallbackTitle: 'Use passcode',
          androidTitle: 'Register with biometrics'
        });
      }

      const biometricHash = btoa(this.email.trim());
      const success = await this.authService.registerUser(this.email, this.password, biometricHash);

      if (success) {
        alert('Registro exitoso');
        this.router.navigate(['/login']);
      }
    } catch (error) {
      if (error instanceof BiometryError) {
        if (error.code !== BiometryErrorType.userCancel) {
          alert(`Biometric registration failed: ${error.message}`);
        }
      } else {
        alert('Error en el registro biométrico.');
      }
    }
  }

  // Función para detectar si se está ejecutando en un dispositivo móvil
  isMobileDevice(): boolean {
    return /Android|iPhone|iPad|iPod/.test(navigator.userAgent);
  }
}
