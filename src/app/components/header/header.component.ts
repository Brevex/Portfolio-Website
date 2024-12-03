import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

interface TypingState {
  readonly currentTextIndex: number;
  readonly charIndex: number;
  readonly isDeleting: boolean;
}

const TYPING_CONFIG = {
  TYPING_DELAY: 150,
  ERASING_DELAY: 100,
  NEW_TEXT_DELAY: 2000,
} as const;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  private readonly state$ = new BehaviorSubject<TypingState>({
    currentTextIndex: 0,
    charIndex: 0,
    isDeleting: false
  });

  private readonly texts: ReadonlyArray<string> = [
    'Software Developer',
    'Addicted to coffee'
  ];

  typedText = '';

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initializeTypingEffect();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeTypingEffect(): void {
    setTimeout(() => this.type(), TYPING_CONFIG.NEW_TEXT_DELAY);
  }

  private type(): void {
    if (this.destroy$.closed) return;

    const currentState = this.state$.value;
    const currentFullText = this.texts[currentState.currentTextIndex];
    const newState = this.calculateNextState(currentState, currentFullText);
    
    this.state$.next(newState);
    this.updateTypedText(currentFullText, newState.charIndex);

    const nextDelay = this.calculateNextDelay(newState, currentFullText);
    setTimeout(() => this.type(), nextDelay);
  }

  private calculateNextState(currentState: TypingState, currentFullText: string): TypingState {
    const { currentTextIndex, charIndex, isDeleting } = currentState;

    if (isDeleting) {
      const newCharIndex = Math.max(0, charIndex - 1);
      if (newCharIndex === 0) {
        return {
          currentTextIndex: (currentTextIndex + 1) % this.texts.length,
          charIndex: 0,
          isDeleting: false
        };
      }
      return { ...currentState, charIndex: newCharIndex };
    }

    if (charIndex >= currentFullText.length) {
      return { ...currentState, isDeleting: true };
    }
    return { ...currentState, charIndex: charIndex + 1 };
  }

  private updateTypedText(fullText: string, charIndex: number): void {
    this.typedText = this.sanitizeText(fullText.substring(0, charIndex));
    this.cdr.markForCheck();
  }

  private calculateNextDelay(state: TypingState, currentFullText: string): number {
    if (state.isDeleting) {
      return state.charIndex === 0 ? TYPING_CONFIG.NEW_TEXT_DELAY : TYPING_CONFIG.ERASING_DELAY;
    }
    return state.charIndex >= currentFullText.length ? TYPING_CONFIG.NEW_TEXT_DELAY : TYPING_CONFIG.TYPING_DELAY;
  }

  private sanitizeText(text: string): string {
    return text.replace(/[<>]/g, '');
  }
}
