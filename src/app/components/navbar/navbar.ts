import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  protected readonly profile = PROFILE;

  protected readonly navLinks = [
    { label: 'Experiência', href: '#experience' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#footer' },
  ] as const;

  // Mobile menu state
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
