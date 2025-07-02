import { CommonModule, isPlatformBrowser, NgClass } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
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
  activeButton: 'home' | 'about' | 'verticals' | 'contact' | 'careers' | '' = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;

        if (isPlatformBrowser(this.platformId)) {
          // Handle fragment scrolling
          this.route.fragment.subscribe(fragment => {
            if (fragment) {
              this.activeButton = fragment as typeof this.activeButton;
              setTimeout(() => this.scrollToElement(fragment), 200);
            } else {
              // Fallback based on route (in case no fragment is present)
              switch (this.currentRoute) {
                case '/':
                case '/home':
                  this.activeButton = 'home';
                  break;
                case '/Contact':
                  this.activeButton = 'contact';
                  break;
                case '/Careers':
                  this.activeButton = 'careers';
                  break;
                default:
                  this.activeButton = '';
              }
            }
          });
        }
      }
    });
  }

  scrollToSection(sectionId: 'home' | 'about' | 'verticals') {
    this.activeButton = sectionId;

    // Use fragment-based navigation
    this.router.navigate(['/'], { fragment: sectionId });
  }

  private scrollToElement(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
