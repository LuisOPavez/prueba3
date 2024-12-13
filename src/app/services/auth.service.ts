import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  // Método para limpiar todas las preferencias
  async clearPreferences(): Promise<void> {
    await Preferences.clear();
    this.currentUserSubject.next(null);
    alert('All preferences cleared.');
  }

  async registerUser(email: string, password: string, biometricHash: string): Promise<boolean> {
    const trimmedEmail = email.trim().toLowerCase();
    const user = await Preferences.get({ key: `user_${trimmedEmail}` });

    if (user.value) {
      alert('El usuario ya existe.');
      return false;
    }

    const passwordHash = btoa(password);
    await Preferences.set({ key: `user_${trimmedEmail}`, value: JSON.stringify({ passwordHash, biometricHash }) });
    alert('Usuario registrado correctamente.');
    return true;
  }

  async loginUser(email: string, password: string, biometricHash: string): Promise<boolean> {
    const trimmedEmail = email.trim().toLowerCase();
    const user = await Preferences.get({ key: `user_${trimmedEmail}` });

    if (!user.value) {
      alert('Usuario no encontrado.');
      return false;
    }

    const userData = JSON.parse(user.value);

    if (userData.passwordHash !== btoa(password)) {
      alert('Contraseña incorrecta.');
      return false;
    }

    if (userData.biometricHash !== biometricHash) {
      alert('La autenticación biométrica falló.');
      return false;
    }

    this.currentUserSubject.next(trimmedEmail);
    return true;
  }

  async logout(): Promise<void> {
    await Preferences.clear();
    localStorage.clear();
    this.currentUserSubject.next(null);
    alert('Sesión cerrada.');
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }
}
