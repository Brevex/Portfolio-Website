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

  // Number of visible cards on desktop
  private readonly visibleCount = 3;

  // Carousel state
  protected readonly currentIndex = signal(0);

  // Show carousel controls only when there are more projects than visible
  protected readonly needsCarousel = computed(() => this.projects.length > this.visibleCount);

  protected readonly canScrollLeft = computed(() => this.currentIndex() > 0);
  protected readonly canScrollRight = computed(
    () => this.needsCarousel() && this.currentIndex() < this.projects.length - this.visibleCount,
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
