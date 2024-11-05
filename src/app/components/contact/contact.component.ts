import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeResourceUrlPipe } from '../../pipes/safe-resource-url.pipe';

interface SocialNetwork {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SafeResourceUrlPipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly locationName = 'IMD - Instituto Metrópole Digital';
  readonly mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.1646888838545!2d-35.20801942419099!3d-5.832393357494795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff8566fe1f6f%3A0xd35194a8cdd83856!2sIMD%20-%20Instituto%20Metrop%C3%B3le%20Digital%20-%20Lagoa%20Nova%2C%20Natal%20-%20RN%2C%2059076-560!5e0!3m2!1spt-BR!2sbr!4v1730779055060!5m2!1spt-BR!2sbr';
  
  readonly socialNetworks: SocialNetwork[] = [
    {
      name: 'Github',
      icon: 'devicon-github-original',
      url: 'https://github.com/Brevex'
    },
    {
      name: 'LinkedIn',
      icon: 'devicon-linkedin-plain',
      url: 'https://www.linkedin.com/in/brenobDev/'
    }
  ];

  trackByName(_: number, network: SocialNetwork): string {
    return network.name;
  }

  navigateTo(url: string): void {
    if (!url) return;
    window.open(url, '_blank', 'noopener noreferrer');
  }
}