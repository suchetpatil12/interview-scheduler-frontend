import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterviewService } from '../interview.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  providers: [InterviewService]
})
export class InterviewFormComponent {

  interview = {
    stageOfInterview: '',
    candidateEmail: '',
    candidateName: '',
    interviewType: '',
    recruiterEmail: '',
    recruiterName: '',
    interviewDate: '',
    googleMeetLink: '',
    phoneNumber: '',
    description: '',
    inOfficeDescription: ''
  };

  constructor(
    private interviewService: InterviewService,
    private snackBar: MatSnackBar
  ) {}

  scheduleInterview(form: any) {
    this.interviewService.scheduleInterview(this.interview).subscribe({
      next: () => {
        this.snackBar.open('Interview scheduled successfully!', 'Close', {
          duration: 5000,
          panelClass: ['snackbar-success'],
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        form.resetForm();
        this.resetForm();
      },
      error: (error) => {
        this.snackBar.open(`Error: ${error.message || 'Unknown error'}`, 'Close', {
          duration: 5000,
          panelClass: ['snackbar-error'],
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
    });
  }

  resetForm() {
    this.interview = {
      stageOfInterview: '',
      candidateEmail: '',
      candidateName: '',
      interviewType: '',
      recruiterEmail: '',
      recruiterName: '',
      interviewDate: '',
      googleMeetLink: '',
      phoneNumber: '',
      description: '',
      inOfficeDescription: ''
    };
  }

  onInterviewTypeChange() {
    this.interview.googleMeetLink = '';
    this.interview.phoneNumber = '';
    this.interview.inOfficeDescription = '';
  }
}