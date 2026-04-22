import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { InterviewFormComponent } from './interview-form/interview-form.component';

import { authGuard } from './auth.guard';

  
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [authGuard]},
    {
  path: 'admin',
  component: AdminDashboardComponent,
  children: [
    { path: '', component: UserDashboardComponent },   // dashboard content
    // { path: 'schedule', component: InterviewFormComponent }
  ]
},
    { path: 'admin/schedule', component: InterviewFormComponent,canActivate: [authGuard] },
    { path: 'user', component: UserDashboardComponent,canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];

