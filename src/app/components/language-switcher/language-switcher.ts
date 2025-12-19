import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LanguageService, SUPPORTED_LANGUAGES } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="lang-switcher"
      (click)="languageService.toggleLanguage()"
      [attr.aria-label]="'Switch to ' + nextLanguage().name"
      type="button"
    >
      <span class="lang-flag" aria-hidden="true">{{ languageService.currentLanguage().flag }}</span>
      <span class="lang-code">{{ languageService.currentLanguage().code.toUpperCase() }}</span>
    </button>
  `,
  styles: `
    .lang-switcher {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-3);
      min-height: var(--touch-target);
      background: transparent;
      border: var(--crt-border-dim);
      border-radius: var(--radius-sm);
      color: var(--neon-primary);
      font-family: var(--font-primary);
      font-size: var(--text-sm);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      text-shadow: 0 0 5px var(--neon-primary);
      transition: all var(--transition-fast);
    }

    .lang-switcher:hover {
      border-color: var(--neon-primary);
      box-shadow: var(--crt-glow-sm);
      animation: glitch-box 0.15s ease-in-out;
    }

    .lang-flag {
      font-size: 1em;
    }

    .lang-code {
      font-size: var(--text-xs);
    }

    @media (max-width: 767px) {
      .lang-switcher {
        padding: var(--space-2);
      }

      .lang-code {
        display: none;
      }
    }
  `,
})
export class LanguageSwitcherComponent {
  protected readonly languageService = inject(LanguageService);

  protected nextLanguage() {
    const currentCode = this.languageService.currentLanguage().code;
    const currentIndex = SUPPORTED_LANGUAGES.findIndex((l) => l.code === currentCode);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    return SUPPORTED_LANGUAGES[nextIndex];
  }
}
