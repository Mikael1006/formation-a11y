import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
  id = `input-field-${nextId++}`;
  value = model('');

  required = input(false);
}
