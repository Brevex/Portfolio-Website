import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

interface Project {
  name: string;
  image: string;
  githubUrl: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('600ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms ease-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: "Smart Parking System",
      image: "assets/projects/smart-parking-system.png",
      githubUrl: "https://github.com/Brevex/Smart-Parking-System.git",
      description: "An intelligent parking system connected to Firebase and managed by a real-time web application. The system includes access card reading, parking availability monitoring, an alarm system, and real-time monitoring.",
      technologies: ["arduino", "java", "spring", "angular", "firebase"]
    },
    {
      name: "Pastora",
      image: "assets/projects/pastora.png",
      githubUrl: "https://github.com/talis-fb/Pastora",
      description: "A full-stack system for real-time monitoring of web service statuses.",
      technologies: ["java", "spring", "vuejs", "postgresql"]
    },
    {
      name: "BitCrab",
      image: "assets/projects/bitcrab.png",
      githubUrl: "https://github.com/Brevex/BitCrab.git",
      description: "A CLI application for downloading files via the BitTorrent protocol, implemented in Rust, focused on efficiency and security.",
      technologies: ["rust"]
    },
  ];

  currentIndex = 0;
  isMobile = false;
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }
  
  ngOnInit() {
    this.checkScreenSize();
    this.updateCarousel();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  previous() {
    this.currentIndex = this.currentIndex === 0 
      ? this.projects.length - 1 
      : this.currentIndex - 1;
  }

  private updateCarousel() {}

  openGithub(url: string) {
    window.open(url, '_blank');
  }

  getTechnologyIcon(tech: string): string {
    return `devicon-${tech}-plain`;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}