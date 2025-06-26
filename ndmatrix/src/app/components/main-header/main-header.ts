import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'main-header',
  standalone: true,
  imports: [RouterLink,CommonModule,NgClass],
  templateUrl: './main-header.html',
    styleUrls: ['./main-header.css'] 
})
export class MainHeader {
  isMenuOpen = false;
   currentRoute: string = '';
    activeButton: 'home' | 'about' | 'verticals' | 'contact' | '' = '';
   constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;

        switch (this.currentRoute) {
      case '/':
      case '/home':
        this.activeButton = 'home';
        break;
      case '/ContactPage':
        this.activeButton = 'contact';
        break;
      default:
        // Set to blank if not a route that should highlight any button
        this.activeButton = '';
    }

      }
    });
  }
  scrollToSection(sectionId: string, button: 'home' | 'about' | 'verticals') {
  if (this.currentRoute === '/') {
    if (button === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    this.activeButton = button;
  } else {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        if (button === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
        this.activeButton = button;
      }, 100);
    });
  }
}


 toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
}

//   handleHomePage(){
//  this.router.navigate(['/'])
//   }
}
