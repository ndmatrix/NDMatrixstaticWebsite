// app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NDMatrixHomePage } from './components/n-dmatrix-home-page/n-dmatrix-home-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NDMatrixHomePage, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'nDmatrix-Page';
}
