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
      background: var(--color-bg-tertiary);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius-md);
      color: var(--color-text-primary);
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      font-weight: 500;
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .lang-switcher:hover {
      background: var(--color-accent-green);
      color: var(--color-bg-primary);
      border-color: var(--color-accent-green);
    }

    .lang-flag {
      font-size: 1.1em;
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
