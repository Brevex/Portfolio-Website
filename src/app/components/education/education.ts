import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EDUCATION, formatDateRange } from '../../data/portfolio-data';

@Component({
  selector: 'app-education',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class EducationComponent {
  protected readonly education = EDUCATION;
  protected readonly formatDateRange = formatDateRange;

  // Track which education items are expanded
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
