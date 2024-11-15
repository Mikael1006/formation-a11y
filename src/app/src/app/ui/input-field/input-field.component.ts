import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FieldDirective, fieldHostDirective } from '../field/field.directive';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [fieldHostDirective]
})
export class InputFieldComponent {
  field = inject(FieldDirective);
}
