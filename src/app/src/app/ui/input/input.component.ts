import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';
import { ControlContainer, NgControl, NgModel } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'input[app-input]',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: '',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.id]': 'id()',
    '[class.error]': 'field.getHasError()',
    '[attr.aria-invalid]': 'field.getHasError()',
    '[attr.aria-describedby]': 'field.subLabelId + " " + field.errorId',
    '[required]': 'required()',
  }
})
export class InputComponent {
  elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  ngControl = inject(NgControl, {optional: true, self: true})!;
  field: InputFieldComponent = inject(InputFieldComponent);

  id = input(`input-${nextId++}`);
  required = input(false, { transform: booleanAttribute });
}
