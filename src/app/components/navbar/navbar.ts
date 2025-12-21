import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PROFILE } from '../../data/portfolio-data';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, LanguageSwitcherComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  protected readonly profile = PROFILE;

  protected readonly navLinks = [
    { labelKey: 'NAV.EXPERIENCE', href: '#experience' },
    { labelKey: 'NAV.PROJECTS', href: '#projects' },
    { labelKey: 'NAV.EDUCATION', href: '#education' },
    { labelKey: 'NAV.CONTACT', href: '#footer' },
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
