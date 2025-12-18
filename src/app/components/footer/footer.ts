import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PROFILE, getCurrentYear } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  protected readonly profile = PROFILE;
  protected readonly currentYear = getCurrentYear();
  protected readonly startYear = 2023;

  // Translation params for copyright
  protected readonly copyrightParams = {
    startYear: this.startYear,
    currentYear: this.currentYear,
    name: this.profile.name,
  };
}
