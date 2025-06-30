import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';

const isBrowser = typeof window !== 'undefined';

@Component({
  selector: 'contact-page',
  standalone: true,
  imports: [FormsModule, MainHeader, MainFooter],
  templateUrl: './contact-page.html',
  styleUrls: ['./contact-page.css']
})
export class ContactPage {
}
