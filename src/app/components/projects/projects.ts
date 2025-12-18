import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PROJECTS, type Project } from '../../data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  protected readonly projects = PROJECTS;

  // Carousel state
  protected readonly currentIndex = signal(0);

  protected readonly canScrollLeft = computed(() => this.currentIndex() > 0);
  protected readonly canScrollRight = computed(
    () => this.currentIndex() < this.projects.length - 1
  );

  protected scrollLeft(): void {
    if (this.canScrollLeft()) {
      this.currentIndex.update((i) => i - 1);
    }
  }

  protected scrollRight(): void {
    if (this.canScrollRight()) {
      this.currentIndex.update((i) => i + 1);
    }
  }

  protected trackByProject(_index: number, project: Project): string {
    return project.id;
  }
}
