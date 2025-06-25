import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'verticals-page',
  standalone:true,
  imports: [CommonModule,RouterLink],
  templateUrl: './verticals-page.html',
  styleUrls: ['./verticals-page.css']
})
export class VerticalsPage {
  constructor(private router:Router , private activatedRoute:ActivatedRoute){
    this.currentRoute=this.router.url
  }
   hoverCard: any = null;
currentRoute: string = '';
  verticals=[
    {
      title:"Aerospace/Mechanical",
      description:`NDMatrix provides advanced tools and learning resources for Aerospace and Mechanical Engineering,Ideal for students, educators, and professionals aiming for industry readiness.`,
      verticalImg:"images/aerospace.jpg",
    },
    {
    title:"Robotics/Mechatronics",
    description:`We offers hands-on learning tools and real-world project support in Robotics and Mechatronics,We empower students to design, simulate, and control intelligent systems with industry-relevant skills.`,
 verticalImg:"images/robotic.jpg",
    },
     {
    title:"AI/ML Software Tools",
    description:`We provides AI/ML tools and learning modules tailored for practical implementation and academic growth.`,
 verticalImg:"images/mlalogorithm.jpg",
    },
     {
    title:"Software Development Center",
    description:` We supports students and educators in building real-world applications,From coding fundamentals to full-stack development, we offer guided, project-based learning experiences.`,
 verticalImg:"images/softwareDev.jpg",
 route:"/software-development-center/productsPage"
    }
  ]

  onMouseEnter(card: any) {
  this.hoverCard = card;
}

onMouseLeave() {
  this.hoverCard = null;
}
 // Check if this card's route matches current URL
  isActive(card: any): boolean {
    return card.route === this.currentRoute;
  }
onCardClick(card: any, event: MouseEvent) {
    if (card.route) {
      event.preventDefault(); // prevent default if routerLink also used
      this.router.navigate([card.route]);
    }
  }

}
