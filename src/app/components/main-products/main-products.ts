import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'main-products',
  imports: [CommonModule],
  templateUrl: './main-products.html',
  styleUrl: './main-products.css'
})
export class MainProducts {

productCards=[
  {
  title:"Online Test Series",
  discription:`A comprehensive platform where students can take subject-wise, full-length, and mock tests with instant performance reports and analytics.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"Online Recorded lectures",
  discription:` A learning platform offering topic-wise recorded lectures along with short quizzes/tests related to each video for better concept retention.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"practice question bank",
  discription:`A flexible system for practicing questions with filters by topic and difficulty, plus detailed solutions`,
  productImg:"images/otsImage.jpg"
},
{
 title:"study materials",
  discription:`A digital notebook with virtual study materials, highlighting, bookmarking, notes, and search.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"test generator",
  discription:`A backend tool for automated creation of customized tests by selecting question type, topic, difficulty, and more.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"learning management system",
  discription:`A platform to manage courses, lessons, assignments, progress, and instructor-student engagement.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"student management system",
  discription:`  A system for managing student data, registrations, attendance, academic performance, and communication with administrators.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"admin portal",
  discription:`A robust backend platform for managing tests, courses, scheduling, and performance reviews.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"bundle project",
  discription:`A unified platform combining OTS, ORVL, PQB, SM, LMS, and SMS for seamless use by institutes and learners`,
  productImg:"images/otsImage.jpg"
},
{
 title:"cloud services & infrastracture",
 discription:`Tools for deploying, scaling, and maintaining cloud apps with containers, CI/CD, and monitoring.`,
  productImg:"images/otsImage.jpg"
}
]

}
