import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-products',
  imports: [CommonModule],
  templateUrl: './main-products.html',
  styleUrl: './main-products.css'
})
export class MainProducts {
constructor(private router:Router){}

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
  discription:`A flexible system where students can practice a wide range of questions, filter by topic and difficulty, and view detailed solutions and explanations.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"study materials",
  discription:`A digital notebook-like interface offering virtual study materials with features such as highlighting, bookmarking, personal notes, and search.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"test generator",
  discription:` A backend tool that allows automated generation of customized tests by selecting parameters like question type, topic, difficulty, and more.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"learning management system",
  discription:`A structured platform to manage courses, lessons, assignments, progress tracking, and engagement between instructors and students.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"student management system",
  discription:`  A system for managing student data, registrations, attendance, academic performance, and communication with administrators.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"admin portal",
  discription:`  A robust backend platform for managing the entire academic workflow — including uploading tests, creating and assigning courses, managing test content, scheduling, and performance review tools.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"bundle project",
  discription:` A unified ecosystem that combines all our major products—OTS, ORVL, PQB, SM, LMS, SMS—into a single platform for seamless use by institutes and learners.`,
  productImg:"images/otsImage.jpg"
},
{
 title:"cloud services & infrastracture",
 discription:`Tools and systems for deploying, scaling, and maintaining cloud-based applications using containerization, CI/CD, and monitoring services.`,
  productImg:"images/otsImage.jpg"
}
]

}
