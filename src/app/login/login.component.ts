import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private authService: AuthService,private router: Router) {}

 login() {
  const data = {
    username: this.username,
    password: this.password
  };

 this.authService.login(data).subscribe({
  next: (res) => {

    this.authService.saveToken(res);

    const role = this.authService.getRole();
    console.log("ROLE AFTER LOGIN:", role); // 🔥 IMPORTANT DEBUG

    if (role === 'ADMIN') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }
  },
  error: () => {
    alert("Invalid credentials");
  }
});
}
}