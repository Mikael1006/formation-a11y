import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FieldDirective } from '../field/field.directive';

@Component({
  selector: 'app-select-field',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './select-field.component.html',
  styleUrl: './select-field.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [FieldDirective]
})
export class SelectFieldComponent {
  field = inject(FieldDirective);
}
