import { Component } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';
import { MainBanner } from '../main-banner/main-banner';
import { VerticalsPage } from '../verticals-page/verticals-page';

@Component({
  selector: 'n-dmatrix-home-page',
   standalone: true,
  imports: [MainHeader,MainBanner,VerticalsPage,MainFooter],
  templateUrl: './n-dmatrix-home-page.html',
  styleUrls:[ './n-dmatrix-home-page.css']
})
export class NDMatrixHomePage {


}
