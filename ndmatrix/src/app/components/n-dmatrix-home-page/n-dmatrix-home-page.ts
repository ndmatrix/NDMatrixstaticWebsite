import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';
import { MainBanner } from '../main-banner/main-banner';
import { VerticalsPage } from '../verticals-page/verticals-page';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'n-dmatrix-home-page',
   standalone: true,
  imports: [MainHeader,MainBanner,VerticalsPage,MainFooter],
  templateUrl: './n-dmatrix-home-page.html',
  styleUrls:[ './n-dmatrix-home-page.css']
})
export class NDMatrixHomePage implements AfterViewInit{

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  @ViewChild('verticalsContainer', { static: false }) verticalsContainer!: ElementRef;

  ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('verticals-visible');
        } else {
          entry.target.classList.remove('verticals-visible');
        }
      });
    }, { threshold: 0.1 });

    if (this.verticalsContainer?.nativeElement) {
      observer.observe(this.verticalsContainer.nativeElement);
    }
  }
}

}
