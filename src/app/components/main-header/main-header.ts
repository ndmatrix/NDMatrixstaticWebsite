import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'main-header',
  imports: [],
  templateUrl: './main-header.html',
  styleUrl: './main-header.css'
})
export class MainHeader {
constructor(private router:Router){
  
}
}
