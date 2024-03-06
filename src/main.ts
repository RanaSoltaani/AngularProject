import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './app/environnements/environnements.local';



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

console.log('Environment:', environment.env)
