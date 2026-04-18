import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  private apiUrl = 'http://localhost:8080/api/interviews/schedule';

  constructor(private http: HttpClient) {
  }

  scheduleInterview(interview: any): Observable<any> {
    return this.http.post(this.apiUrl, interview).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('Client-side error:', error.error.message);
      return throwError(() => new Error('An error occurred while scheduling the interview.'));
    } else {
      // Server-side error
      console.error('Server-side error:', error);
      return throwError(() => new Error(error.error?.message || 'Server error occurred'));
    }
  }
}
