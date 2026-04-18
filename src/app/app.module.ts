// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
//
// @NgModule({
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [] // No need to bootstrap anything here
// })
// export class AppModule { }




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterviewFormComponent } from './interview-form/interview-form.component';
import { InterviewService } from './interview.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    // Ensure this line is present
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppComponent,
    InterviewFormComponent
  ],
  providers: [InterviewService, provideAnimationsAsync()],
  bootstrap: [AppComponent] // Ensure this line is present
})
export class AppModule { }
