import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, getCurrentYear } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly profile = PROFILE;
  protected readonly currentYear = getCurrentYear();
  protected readonly startYear = 2023;
}
