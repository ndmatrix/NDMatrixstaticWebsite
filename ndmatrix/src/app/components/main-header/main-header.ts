import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [RouterLink, CommonModule, NgClass],
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

      const url = new URL(window.location.href);
      const active = url.searchParams.get('active');
      const section = url.searchParams.get('section');

      if (active) {
        this.activeButton = active as 'home' | 'about' | 'verticals';
      }

      if (section) {
        setTimeout(() => {
          this.scrollToElement(section, active || '');
        }, 200);
      } else {
        // fallback default behavior
        switch (this.currentRoute) {
          case '/':
          case '/home':
            this.activeButton = 'home';
            break;
          case '/ContactPage':
            this.activeButton = 'contact';
            break;
          default:
            this.activeButton = '';
        }
      }
    }
  });
}


  scrollToSection(sectionId: string, button: 'home' | 'about' | 'verticals') {
    if (this.currentRoute === '/') {
      this.activeButton = button;
      this.scrollToElement(sectionId, button);
    } else {
      this.router.navigate(['/'], {
        queryParams: { section: sectionId, active: button }
      });
    }
  }

  private scrollToElement(sectionId: string, button: string) {
    if (button === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
