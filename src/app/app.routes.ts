import { Routes } from '@angular/router';
import { RegistrationPage } from './components/registration-page/registration-page';
import { NDMatrixHomePage } from './components/n-dmatrix-home-page/n-dmatrix-home-page';

export const routes: Routes = [
    {path:'', component:NDMatrixHomePage},
    {path:'RegisterPage',component:RegistrationPage}];
