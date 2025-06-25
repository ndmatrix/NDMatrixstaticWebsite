import { Routes } from '@angular/router';
import { NDMatrixHomePage } from './components/n-dmatrix-home-page/n-dmatrix-home-page';
import { ContactPage } from './components/contact-page/contact-page';
import { MainProducts } from './components/main-products/main-products';


export const routes: Routes = [
    {path:'', component:NDMatrixHomePage},
    {path:'ContactPage',component:ContactPage},
     {path:'software-development-center/productsPage', component:MainProducts}
];
