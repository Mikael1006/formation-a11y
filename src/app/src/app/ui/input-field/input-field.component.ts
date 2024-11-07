import { CommonModule } from '@angular/common';
import { Component, contentChild, inject } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { NgForm } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFieldComponent {
  inputComponent = contentChild.required(InputComponent);
  ngForm = inject(NgForm)!;

  componentId = nextId++;
  subLabelId = `input-field-subLabel-${this.componentId}`;
  errorId = `input-field-error-${this.componentId}`;

  getHasError(): boolean {
    return this.inputComponent().elementRef.nativeElement.required && !this.inputComponent().elementRef.nativeElement.value && this.ngForm.submitted;
  }
}
