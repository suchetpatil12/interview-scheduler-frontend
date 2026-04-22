import { Component } from '@angular/core';
import { InterviewFormComponent } from '../interview-form/interview-form.component';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, InterviewFormComponent],
  template: `
    <h2>Dashboard</h2>

    <h3 *ngIf="role === 'ADMIN'">Welcome Admin</h3>
    <h3 *ngIf="role === 'USER'">Welcome User</h3>

    <button (click)="logout()">Logout</button>

    <!-- Only admin can schedule -->
    <app-interview-form *ngIf="role === 'ADMIN'"></app-interview-form>
  `
})
export class DashboardComponent {

  role: string | null = '';

  constructor(private authService: AuthService) {
    this.role = this.authService.getRole();
  }

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}