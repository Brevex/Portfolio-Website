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
          description: "I actively contribute to the development of a sophisticated real-time fault detection system using computer vision, leveraging cutting-edge technologies to enhance industrial automation in the textile sector. Collaborating with a proactive team, I follow agile development principles to deliver high-quality solutions that prioritize production efficiency and customer satisfaction.",
          technologies: ["python", "c", "opencv"]
        },
        {
          title: "Back-end Developer",
          period: "2024",
          description: "I conducted research on animal behavior patterns using machine learning and computer vision techniques with Python, while also developing a model management system using Java and Spring. To optimize the project lifecycle, I implemented MLOps strategies, including Docker for containerization, monitoring and retraining models, benchmarking, and establishing model review and governance processes to ensure compliance and performance. Additionally, I served as a liaison between cross-functional teams, facilitating seamless access to AI models for non-technical stakeholders.",
          technologies: ["java", "spring", "python", "postgresql", "docker"]
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
          description: "At EJECT, I was responsible for developing and delivering customized web systems tailored to the needs of companies, contributing to business growth and the automation of essential processes. I developed robust web applications with a focus on creating and integrating RESTful APIs and ensuring efficient database communication using Java, Spring, Angular, and PostgreSQL. Working in an agile environment, I collaborated with multifunctional teams to deliver high-quality solutions aligned with client objectives.",
          technologies: ["java", "spring", "angular", "postgresql", "docker"]
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
