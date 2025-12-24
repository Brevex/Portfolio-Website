import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PROFILE, TECHNOLOGIES } from '../../data/portfolio-data';

const ANIMATION_CONFIG = {
  CYCLE_DURATION: 5000,
  TYPE_OUT_DELAY: 350,
} as const;

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly profile = PROFILE;
  protected readonly technologies = TECHNOLOGIES;
  protected readonly currentTitleKey = signal<string>('HERO.TITLE');
  protected readonly isTypingOut = signal<boolean>(false);
  protected readonly animationKey = signal<number>(0);

  private readonly titleKeys = ['HERO.TITLE', 'HERO.TITLE_ALT'] as const;
  private currentIndex = 0;

  constructor() {
    afterNextRender(() => {
      this.startTitleRotation();
    });
  }

  private startTitleRotation(): void {
    const intervalId = setInterval(() => {
      this.animateTransition();
    }, ANIMATION_CONFIG.CYCLE_DURATION);
    this.destroyRef.onDestroy(() => clearInterval(intervalId));
  }

  private animateTransition(): void {
    this.isTypingOut.set(true);

    const timeoutId = setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.titleKeys.length;
      this.currentTitleKey.set(this.titleKeys[this.currentIndex]);
      this.isTypingOut.set(false);
      this.animationKey.update((k) => k + 1);
    }, ANIMATION_CONFIG.TYPE_OUT_DELAY);

    this.destroyRef.onDestroy(() => clearTimeout(timeoutId));
  }

  protected handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
