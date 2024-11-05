import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  menuOpen: boolean = false;
  isScrolled: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}
