import { Routes } from '@angular/router';
import { AccessGuard } from '../access.guard';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, }
];


// canActivate:[AccessGuard]