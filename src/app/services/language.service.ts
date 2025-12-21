/**
 * Language Service
 * Centralized language management with localStorage persistence
 */

import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  readonly code: string;
  readonly name: string;
  readonly flag: string; // Emoji or SVG
}

export const SUPPORTED_LANGUAGES: readonly Language[] = [
  { code: 'en', name: 'English', flag: 'assets/flags/us.svg' },
  { code: 'pt', name: 'Português', flag: 'assets/flags/br.svg' },
] as const;

const STORAGE_KEY = 'portfolio_lang';
const DEFAULT_LANGUAGE = 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translateService = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly currentLanguage = signal<Language>(SUPPORTED_LANGUAGES[0]);
  readonly supportedLanguages = SUPPORTED_LANGUAGES;

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Set supported languages
    this.translateService.addLangs(SUPPORTED_LANGUAGES.map((l) => l.code));
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);

    // Determine initial language
    const savedLang = this.getSavedLanguage();
    const browserLang = this.getBrowserLanguage();
    const initialLang = savedLang || browserLang || DEFAULT_LANGUAGE;

    this.setLanguage(initialLang);
  }

  private getSavedLanguage(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(STORAGE_KEY);
    }
    return null;
  }

  private getBrowserLanguage(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const browserLang = navigator.language?.split('-')[0];
      const isSupported = SUPPORTED_LANGUAGES.some((l) => l.code === browserLang);
      return isSupported ? browserLang : null;
    }
    return null;
  }

  setLanguage(code: string): void {
    const language = SUPPORTED_LANGUAGES.find((l) => l.code === code);
    if (!language) {
      console.warn(`Language "${code}" not supported`);
      return;
    }

    this.translateService.use(code);
    this.currentLanguage.set(language);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, code);
      document.documentElement.lang = code;
    }
  }

  toggleLanguage(): void {
    const currentCode = this.currentLanguage().code;
    const currentIndex = SUPPORTED_LANGUAGES.findIndex((l) => l.code === currentCode);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    this.setLanguage(SUPPORTED_LANGUAGES[nextIndex].code);
  }
}
