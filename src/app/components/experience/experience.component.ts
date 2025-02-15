import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  institution: string;
  logo: string;
  positions: Position[];
}

interface Position {
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  enterpriseExperiences: Experience[] = [
    {
      institution: "Digital Metropolis Institute",
      logo: "../../../assets/logos/imd.png",
      positions: [
        {
          title: "AI Developer",
          period: "2025 - Present",
          description: "I contribute to the development of a sophisticated real-time fault detection system using machine learning and computer vision, implementing cutting-edge technologies for industrial automation in the textile sector. Working within a proactive team that follows agile development principles, I help deliver a high-quality product focused on production efficiency and customer satisfaction.",
          technologies: ["python", "opencv"]
        },
        {
          title: "Back-end Developer",
          period: "2024",
          description: "I developed a behavioral pattern identification mechanism using Python, focused on machine learning and computer vision, successfully integrating AI models with a Java Spring-based management system. Acting as a bridge between cross-functional teams, I ensured that non-technical team members had accessible interfaces to AI models, facilitating broader organizational adoption of these technologies.",
          technologies: ["java", "spring", "python", "docker"]
        },
      ]
    },
    {
      institution: "EJECT",
      logo: "../../../assets/logos/eject.png",
      positions: [
        {
          title: "Back-end Developer",
          period: "2020 - 2021",
          description: "I was responsible for developing and delivering customized web systems for businesses, helping them expand their operations and automate essential processes. I built robust web applications, focusing on creating and integrating RESTful APIs and establishing efficient database communications using Java, Spring and Angular. Working in an agile development environment, I collaborated with cross-functional teams to ensure high-quality deliverables that aligned with client objectives.",
          technologies: ["java", "spring", "angular", "docker"]
        },
      ]
    }
  ];

  academicExperiences: Experience[] = [
    {
      institution: "Federal University of Rio Grande do Norte",
      logo: "../../../assets/logos/ufrn.png",
      positions: [
        {
          title: "Bachelor of Science in Information Technology",
          period: "2022 - Present",
          description: "A period in which I learned the fundamental concepts of computer science and gained all the theoretical foundation necessary to delve into more advanced topics. The course covered subjects such as data structures and algorithms, mathematics for computing, computer architecture, concurrent and distributed programming, web development, and artificial intelligence.",
          technologies: ["java", "python", "c"]
        }
      ]
    }
  ];

  getTechnologyIcon(tech: string): string {
    return `devicon-${tech}-plain`;
  }
}
