import { Component, ElementRef, ViewChild } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-page',
  standalone:true,
  imports: [FormsModule,MainHeader,MainFooter],
  templateUrl: './contact-page.html',
  styleUrls: ['./contact-page.css']
})
export class ContactPage {
@ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

sendEmail() {
   console.log("sendEmail() triggered");
  emailjs.sendForm(
    'service_2ap83yn',
    'template_1ffd92k',
    this.contactForm.nativeElement,
    'FTTyjdyRLojv6u0PZ'
  ).then(() => {
    alert('Message sent successfully!');
    this.contactForm.nativeElement.reset();
  }).catch((error) => {
    console.error("EmailJS Error:", error);
    alert('Failed to send message. Please check form fields.');
  });
}

}

