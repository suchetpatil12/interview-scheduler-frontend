import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InterviewService } from '../interview.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    description: '', // Common description field
    inOfficeDescription: '' // New field for in-office description
  };

  constructor(
    private interviewService: InterviewService,
    private snackBar: MatSnackBar
  ) {}

  scheduleInterview(form: any) {
    this.interviewService.scheduleInterview(this.interview).subscribe({
      next: (response) => {
        // Show success notification at the top
        this.snackBar.open('Interview scheduled and emails sent successfully!', 'Close', {
          duration: 5000,
          panelClass: ['snackbar-success'], // Custom styling
          verticalPosition: 'top', // Position at the top
          horizontalPosition: 'center', // Center horizontally
        });
        form.resetForm();
        this.resetForm();
      },
      error: (error) => {
        console.error('Error scheduling interview:', error);
        // Show error notification at the top
        this.snackBar.open(`Error: ${error.message || 'Unknown error occurred'}`, 'Close', {
          duration: 5000,
          panelClass: ['snackbar-error'], // Custom styling
          verticalPosition: 'top', // Position at the top
          horizontalPosition: 'center', // Center horizontally
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
      description: '', // Reset the common description field
      inOfficeDescription: '' // Reset the new field
    };
  }

  onInterviewTypeChange() {
    this.interview.googleMeetLink = '';
    this.interview.phoneNumber = '';
    this.interview.inOfficeDescription = '';
  }
}
