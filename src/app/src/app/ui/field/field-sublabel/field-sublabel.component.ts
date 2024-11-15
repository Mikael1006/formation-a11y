import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FieldDirective } from '../field.directive';

@Component({
  selector: 'p[app-field-sublabel]',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<ng-content></ng-content>`,
  styleUrl: './field-sublabel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[id]' : 'field.subLabelId()',
  }
})
export class FieldSublabelComponent {
  field = inject(FieldDirective);
}
