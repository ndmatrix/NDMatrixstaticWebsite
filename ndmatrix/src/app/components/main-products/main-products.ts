import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';

@Component({
  selector: 'main-products',
  imports: [CommonModule,MainHeader,MainFooter],
  templateUrl: './main-products.html',
  styleUrl: './main-products.css'
})
export class MainProducts implements AfterViewInit{

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('productsContainer', { static: false }) productsContainer!: ElementRef;

  ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('products-visible');
        } else {
          entry.target.classList.remove('products-visible');
        }
      });
    }, { threshold: 0.1 });

    if (this.productsContainer?.nativeElement) {
      observer.observe(this.productsContainer.nativeElement);
    }
  }
}

productCards=[
  {
  title:"Online Test Series",
  discription:`A comprehensive platform where students can take subject-wise, full-length, and mock tests with instant performance reports and analytics.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"Online Recorded lectures",
  discription:` A learning platform offering topic-wise recorded lectures along with short quizzes/tests related to each video for better concept retention.`,
  productImg:"images/orvl.jpg"
},
{
 title:"practice question bank",
  discription:`A flexible system for practicing questions with filters by topic and difficulty, plus detailed solutions`,
  productImg:"images/studenntmangement.jpg"
},
{
 title:"study materials",
  discription:`A digital notebook with virtual study materials, highlighting, bookmarking, notes, and search.`,
  productImg:"images/image.jpg"
},
{
 title:"test generator",
  discription:`A backend tool for automated creation of customized tests by selecting question type, topic, difficulty, and more.`,
  productImg:"images/testGenerators.jpg"
},
{
 title:"learning management system",
  discription:`A platform to manage courses, lessons, assignments, progress, and instructor-student engagement.`,
  productImg:"images/learnmanagement.jpg"
},
{
 title:"student management system",
  discription:`  A system for managing student data, registrations, attendance, academic performance, and communication with administrators.`,
  productImg:"images/studnetimage.jpg"
},
{
 title:"admin portal",
  discription:`A robust backend platform for managing tests, courses, scheduling, and performance reviews.`,
  productImg:"images/adminPortal.jpg"
},
{
 title:"Online Courses",
  discription:`A unified platform combining OTS, ORVL, PQB, SM, LMS, and SMS for seamless use by institutes and learners`,
  productImg:"images/bundleproject.jpg"
},
{
 title:"cloud services & infrastructure",
 discription:`Tools for deploying, scaling, and maintaining cloud apps with containers, CI/CD, and monitoring.`,
  productImg:"images/clouldservices.jpg"
}
]

}
