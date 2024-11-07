import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';
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
    '[attr.id]': 'id',
    '[attr.aria-describedby]': 'field.subLabelId + " " + field.errorId',
  }
})
export class InputComponent {
  elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  ngControl = inject(NgControl, {optional: true, self: true})!;
  field: InputFieldComponent = inject(InputFieldComponent);

  id = input(`input-${nextId++}`);
}
