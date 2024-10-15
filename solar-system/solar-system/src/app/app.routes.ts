import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CosmosComponent } from './cosmos/cosmos.component';

export const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cosmos',
    component:CosmosComponent
  }
];
