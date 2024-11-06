import { Directive, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Directive({
  selector: '[appAriaCurrentPage]',
  standalone: true,
  host: {
    '[attr.aria-current]': "rla.isActive ? 'page' : null",
  }
})
export class AriaCurrentPageDirective {
  protected rla = inject(RouterLinkActive);
}
