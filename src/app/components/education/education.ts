import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EDUCATION } from '../../data/portfolio-data';
import { createExpandableState } from '../../utils/expandable.util';

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

  private readonly expandableState = createExpandableState();
  protected readonly isExpanded = this.expandableState.isExpanded;
  protected readonly toggleExpanded = this.expandableState.toggle;
}
