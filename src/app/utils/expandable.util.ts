/**
 * Expandable State Utility
 * Reusable signal-based state management for expandable list items.
 *
 * @example
 * ```typescript
 * export class MyComponent {
 *   private readonly expandableState = createExpandableState();
 *
 *   protected readonly expandedItems = this.expandableState.expandedItems;
 *   protected readonly isExpanded = this.expandableState.isExpanded;
 *   protected readonly toggleExpanded = this.expandableState.toggle;
 * }
 * ```
 */

import { signal, type Signal } from '@angular/core';

export interface ExpandableState {
  readonly expandedItems: Signal<ReadonlySet<string>>;
  readonly isExpanded: (id: string) => boolean;
  readonly toggle: (id: string) => void;
  readonly expand: (id: string) => void;
  readonly collapse: (id: string) => void;
  readonly collapseAll: () => void;
}

export function createExpandableState(): ExpandableState {
  const expandedItems = signal<Set<string>>(new Set());

  return {
    expandedItems: expandedItems.asReadonly(),

    isExpanded: (id: string): boolean => expandedItems().has(id),

    toggle: (id: string): void => {
      expandedItems.update((current) => {
        const next = new Set(current);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },

    expand: (id: string): void => {
      expandedItems.update((current) => {
        const next = new Set(current);
        next.add(id);
        return next;
      });
    },

    collapse: (id: string): void => {
      expandedItems.update((current) => {
        const next = new Set(current);
        next.delete(id);
        return next;
      });
    },

    collapseAll: (): void => {
      expandedItems.set(new Set());
    },
  };
}
