import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChild, ViewChildren, viewChildren } from '@angular/core';
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
@ViewChildren('cardElement') cardElements!: QueryList<ElementRef>;

ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    this.cardElements.forEach((card) => {
      observer.observe(card.nativeElement);
    });
  }
}


productCards = [
  {
    title: "Online Assessment System",
    discription: `A comprehensive platform where students can take subject-wise, full-length, and mock tests.`,
    productsIcon: "fa-solid fa-laptop-code"
  },
  {
    title: "E-learning Platform",
    discription: `A learning platform offering recorded lectures along with short quizzes/tests related to each video.`,
    productsIcon: "fa-solid fa-video"
  },
  {
    title: "Practice Hub",
    discription: `A flexible system for practicing questions with filters by topic and difficulty, plus detailed solutions.`,
    productsIcon: "fa-solid fa-book-open"
  },
  {
    title: "EduNotes",
    discription: `A digital notebook with virtual study materials, highlighting, bookmarking, notes, and search.`,
    productsIcon: "fa-solid fa-book"
  },
  {
    title: "Test Generator",
    discription: `A backend tool for automated creation of customized tests by selecting question type, topic, difficulty, and more.`,
    productsIcon: "fa-solid fa-cogs"
  },
  {
    title: "Learning Management System",
    discription: `A platform to manage courses, lessons, assignments, progress, and instructor-student engagement.`,
    productsIcon: "fa-solid fa-chalkboard-teacher"
  },
  {
    title: "Student Management System",
    discription: `A system for managing student data, registrations, attendance, academic performance, and communicate with administrators.`,
    productsIcon: "fa-solid fa-user-graduate"
  },
  {
    title: "Admin Portal",
    discription: `A robust backend platform for managing tests, courses, scheduling, and performance reviews.`,
    productsIcon: "fa-solid fa-user-shield"
  },
  {
    title: "Integrated Learning Platform",
    discription: `A unified platform combining OTS, ORVL, PQB, SM, LMS, and SMS for seamless use by institutes and learners.`,
    productsIcon: "fa-solid fa-layer-group"
  },
  {
    title: "Cloud Services & Infrastructure",
    discription: `Tools for deploying, scaling, and maintaining cloud apps with containers, CI/CD, and monitoring.`,
    productsIcon: "fa-solid fa-cloud"
  }
];

}
