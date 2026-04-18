import { Component } from '@angular/core';
import { InterviewFormComponent } from './interview-form/interview-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [InterviewFormComponent]
})
export class AppComponent {
  title = 'interview-scheduler';
}
