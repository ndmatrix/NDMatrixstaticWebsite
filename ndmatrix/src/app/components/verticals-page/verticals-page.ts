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
      title:"Aerospace Research Centre",
      description:`nDMatrix builds high-performance in-house drone systems engineered for reliability, innovation, and use across diverse industries.`,
      verticalImg:"images/drone.jpg",
    },
//     {
//     title:"Robotics/Mechatronics",
//     description:`We offers hands-on learning tools and real-world project support in Robotics and Mechatronics,We empower students to design, simulate skills.`,
//  verticalImg:"images/robotic.jpg",
//     },
//      {
//     title:"AI/ML Software Tools",
//     description:`We provides AI/ML tools and learning modules tailored for practical implementation and academic growth.`,
//  verticalImg:"images/mlalogorithm.jpg",
//     },
     {
    title:"Software Development Centre",
    description:`We specialize in developing innovative EdTech tools and robust core software development products.`,
 verticalImg:"images/softwareDev.jpg",
//  route:"/software-development-center/products"
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
      event.preventDefault(); 
      this.router.navigate([card.route]);
    }
  }

}
