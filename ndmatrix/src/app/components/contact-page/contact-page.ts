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
  // @ViewChild('contactFormRef') contactFormRef!: ElementRef<HTMLFormElement>;

  // sendEmail() {
  //   console.log("sendEmail() triggered");

  //   emailjs.sendForm(
  //     'service_2ap83yn',
  //     'template_1ffd92k',
  //     this.contactFormRef.nativeElement,
  //     'FTTyjdyRLojv6u0PZ'
  //   ).then(() => {
  //     alert('Message sent successfully!');
  //     this.contactFormRef.nativeElement.reset();

  //     // Optional: Clear scroll target after submitting form
  //     // if (isBrowser) {
  //     //   window.sessionStorage.removeItem('scrollTarget');
  //     //   window.sessionStorage.removeItem('activeButton');
  //     // }

  //   }).catch((error) => {
  //     console.error("EmailJS Error:", error);
  //     alert('Failed to send message. Please check form fields.');
  //   });
  // }
}
