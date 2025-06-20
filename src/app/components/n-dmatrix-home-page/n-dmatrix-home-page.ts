import { Component } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainProducts } from '../main-products/main-products';
import { MainFooter } from '../main-footer/main-footer';

@Component({
  selector: 'n-dmatrix-home-page',
   standalone: true,
  imports: [MainHeader,MainProducts,MainFooter],
  templateUrl: './n-dmatrix-home-page.html',
  styleUrls:[ './n-dmatrix-home-page.css']
})
export class NDMatrixHomePage {


}
