import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE, TECHNOLOGIES } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  protected readonly profile = PROFILE;
  protected readonly technologies = TECHNOLOGIES;
}
