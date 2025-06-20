import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'main-header',
  standalone: true,
  imports: [RouterLink,CommonModule,NgClass],
  templateUrl: './main-header.html',
    styleUrls: ['./main-header.css'] 
})
export class MainHeader {
  isMenuOpen = false;
  constructor(private router:Router){}
 scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
 toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}

//   handleHomePage(){
//  this.router.navigate(['/'])
//   }
}
