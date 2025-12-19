import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { interval } from 'rxjs';
import { PROFILE, TECHNOLOGIES } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly profile = PROFILE;
  protected readonly technologies = TECHNOLOGIES;

  // Typing animation state
  protected readonly currentTitleKey = signal<string>('HERO.TITLE');
  protected readonly isTypingOut = signal<boolean>(false);
  protected readonly animationKey = signal<number>(0); // Forces animation restart

  private readonly titleKeys = ['HERO.TITLE', 'HERO.TITLE_ALT'] as const;
  private currentIndex = 0;

  ngOnInit(): void {
    // Alternate titles every 5 seconds (1s type-in + 3.5s display + 0.5s type-out)
    interval(5000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.animateTransition();
      });
  }

  private animateTransition(): void {
    // Phase 1: Type out current text (300ms)
    this.isTypingOut.set(true);

    // Phase 2: After typing-out, change text and type in (300ms later)
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.titleKeys.length;
      this.currentTitleKey.set(this.titleKeys[this.currentIndex]);
      this.isTypingOut.set(false);
      // Increment key to force animation restart
      this.animationKey.update((k) => k + 1);
    }, 350);
  }
}
