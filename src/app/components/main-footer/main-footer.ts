import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-footer',
  imports: [],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.css'
})
export class MainFooter {
constructor(private router:Router){}
}
