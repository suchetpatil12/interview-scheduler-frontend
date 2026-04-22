import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gray-100">

      <!-- Navbar -->
      <div class="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-800">Admin Dashboard 👑</h1>

        <button 
          (click)="logout()"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Logout
        </button>
      </div>

      <!-- Content -->
      <div class="p-8">

        <div class="bg-white p-6 rounded-xl shadow-md max-w-md">

          <h2 class="text-lg font-semibold mb-4">Interview Management</h2>

          <button 
            (click)="goToSchedule()"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Schedule Interview
          </button>

        </div>

      </div>

    </div>
  `
})
export class AdminDashboardComponent {

  constructor(private router: Router) {}

  goToSchedule() {
    this.router.navigate(['/admin/schedule']);
  }

  
logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}
}