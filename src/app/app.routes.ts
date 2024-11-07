import { Routes } from '@angular/router';
import { PatternsComponent } from './src/app/patterns/patterns.component';
import { ProfileComponent } from './src/app/profile/profile.component';
import { CardsComponent } from './src/app/cards/cards.component';

export const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'cards',
  },
  {
  path: 'patterns',
  component: PatternsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  }
];
