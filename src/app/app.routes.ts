// app.routes.ts
import { Routes } from '@angular/router';
import { EventListComponent } from './event/event-list/event-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' }, 
  { path: 'events', component: EventListComponent },

];

