// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppComponent } from './app/app.component';
//
// platformBrowserDynamic().bootstrapModule(AppComponent)
//   .catch(err => console.error(err));
// //



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Import AppModule instead of AppComponent

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
