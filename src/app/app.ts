import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from './components/main-header/main-header';
import { MainFooter } from './components/main-footer/main-footer';
import { MainProducts } from './components/main-products/main-products';

@Component({
  selector: 'app-root',
  imports: [MainHeader,MainProducts,MainFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'nDmatrix-Page';
}
