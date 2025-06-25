import { Component } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'registration-page',
  imports: [MainHeader,MainFooter,FormsModule,CommonModule],
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.css'
})
export class RegistrationPage {
formData = {
    candidateName: '',
    dateOfBirth: '',
    gender: '',
    category: '',
    emailId: '',
    confirmEmailId: '',
    contactNo: '',
    fatherName: '',
    occupation: '',
    mobileNo: '',
    line1: '',
    state: '',
    districts: '',
    pincode: '',
    qualifications: '',
    nameOfCollege: '',
    passingYear: '',
    marks: '',
    termsAccepted: false,
    uploadedPhoto: null,
    proof: null,
  };
   errors: any = {};
  isSubmitting = false;
  showPopup = false;
  popupMessage = '';
  openTermsAndConditions = false;

  handleSubmit() {
    this.isSubmitting = true;
    // Validate and submit
    console.log('Form Submitted', this.formData);
  }
  //  handleChange(event: any) {
  //   const { name, value } = event.target;
  //  (this.formData as any)[name] = value;

  // }

  // handleEmailBlur() {
  //   if (this.formData.emailId !== this.formData.confirmEmailId) {
  //     this.errors.confirmEmailId = 'Emails do not match';
  //   } else {
  //     this.errors.confirmEmailId = '';
  //   }
  // }

  handleBackButtonClick() {
    this.showPopup = false;

  }
  // handleClosePopup() {
  //   this.showPopup = false;
  // }
  handlePhotoUpload(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  console.log('Uploaded Photo:', file);
}
handleProofUpload(event: Event): void {
  const file = (event.target as HTMLInputElement).files?.[0];
  console.log('Uploaded Proof:', file);
}
}
