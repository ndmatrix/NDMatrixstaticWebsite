import { Component } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';

@Component({
  selector: 'contact-page',
  imports: [MainHeader,MainFooter],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage {

}
