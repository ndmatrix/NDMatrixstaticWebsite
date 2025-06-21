import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'main-footer',
  imports: [RouterLink],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.css'
})
export class MainFooter {
constructor(private router:Router){}
}
