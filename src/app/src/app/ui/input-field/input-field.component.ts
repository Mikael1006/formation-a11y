import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChild } from '@angular/core';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
  inputComponent = contentChild.required(InputComponent);
}
