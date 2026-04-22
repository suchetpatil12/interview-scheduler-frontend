import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  template: `
    <h2>User Dashboard 👤</h2>
    <button (click)="logout()">Logout</button>

    <p>You have limited access.</p>
  `
})
export class UserDashboardComponent {

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}