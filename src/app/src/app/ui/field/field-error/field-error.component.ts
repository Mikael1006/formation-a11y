import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FieldDirective } from '../field.directive';

@Component({
  selector: 'p[app-field-error]',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    @if (field.getHasError()) {
      <ng-content></ng-content>
    }
  `,
  styleUrl: './field-error.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]' : 'field.errorId()',
  }
})
export class FieldErrorComponent {
  field = inject(FieldDirective);
}
