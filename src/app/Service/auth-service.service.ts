import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor() {}

  showLogoutButton: boolean = false;

  toggleLogoutButton() {
    this.showLogoutButton = !this.showLogoutButton;
  }

  logout() {
    alert('Log Out');
  }
}
