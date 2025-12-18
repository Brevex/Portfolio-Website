import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { EXPERIENCES, formatDateRange } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  protected readonly experiences = EXPERIENCES;
  protected readonly formatDateRange = formatDateRange;

  // Track which experience items are expanded
  protected readonly expandedItems = signal<Set<string>>(new Set());

  protected toggleExpanded(id: string): void {
    this.expandedItems.update((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  protected isExpanded(id: string): boolean {
    return this.expandedItems().has(id);
  }
}
