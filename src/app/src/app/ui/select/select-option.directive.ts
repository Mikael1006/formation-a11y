import { Highlightable } from '@angular/cdk/a11y';
import { Directive, inject, input } from '@angular/core';
import { SelectComponent } from './select.component';

let nextId = 0;

@Directive({
  selector: '[appSelectOption]',
  standalone: true,
  host: {
    'class': 'select-menu-option',
    'role': 'option',
    '[id]': 'id()',
    '[attr.aria-selected]': 'isSelected()',
    '[class.select-menu-option-selected]': 'isSelected()',
  }
})
export class SelectOptionDirective implements Highlightable {
  select = inject(SelectComponent);

  id = input(`select-option-${nextId++}`);

  setActiveStyles(): void {
  }
  setInactiveStyles(): void {
  }
  // disabled?: boolean | undefined;
  // getLabel?(): string {
  // }

  isSelected(): boolean {
    return this.select.keyManager.activeItem === this;
  }
}
