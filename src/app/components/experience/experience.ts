import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EXPERIENCES, ALL_TECH_ICONS } from '../../data/portfolio-data';
import { createExpandableState } from '../../utils/expandable.util';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  protected readonly experiences = EXPERIENCES;

  private readonly expandableState = createExpandableState();
  protected readonly isExpanded = this.expandableState.isExpanded;
  protected readonly toggleExpanded = this.expandableState.toggle;

  protected getTechIcon(techName: string): string | undefined {
    return ALL_TECH_ICONS.get(techName);
  }
}
