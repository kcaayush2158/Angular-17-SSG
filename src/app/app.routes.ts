import { Routes } from '@angular/router';
import { TrekDetailsComponent } from './trek/trek-details/trek-details.component';

export const routes: Routes = [
  {path:'trip/:id',component: TrekDetailsComponent }
];
