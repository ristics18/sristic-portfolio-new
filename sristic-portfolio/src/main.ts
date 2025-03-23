import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { NavComponent } from './app/nav/nav.component';
import { FooterComponent } from './app/footer/footer.component';
import { AboutComponent } from './app/about/about.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));