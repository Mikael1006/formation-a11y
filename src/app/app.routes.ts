import { Routes } from '@angular/router';
import { PatternsComponent } from './src/app/patterns/patterns.component';
import { ProfileComponent } from './src/app/profile/profile.component';

export const routes: Routes = [{
  path: 'patterns',
  component: PatternsComponent,
},{
  path: 'profile',
  component: ProfileComponent,
}];
