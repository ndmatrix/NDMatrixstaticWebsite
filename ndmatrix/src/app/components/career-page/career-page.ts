import { Component } from '@angular/core';
import { MainHeader } from '../main-header/main-header';
import { MainFooter } from '../main-footer/main-footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'career-page',
  imports: [CommonModule,MainHeader,MainFooter],
  templateUrl: './career-page.html',
  styleUrl: './career-page.css'
})
export class CareerPage {
jobsInfo=[
  {
    jobtitle:"Software Develpoer",
    noOfOpenings:'3',
  },
  {
    jobtitle:"cloud support engineer",
    noOfOpenings:'2',
  }
]

}
