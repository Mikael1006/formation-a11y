import { contentChild, Directive, ElementRef, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FieldControlDirective } from './field-control.directive';

let nextId = 0;

@Directive({
  selector: '[appField]',
  standalone: true,
})
export class FieldDirective {
  elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  fieldControl = contentChild.required(FieldControlDirective);
  ngForm = inject(NgForm)!;

  fieldId = nextId++;
  labelId = `field-label-${this.fieldId}`;
  subLabelId = `field-subLabel-${this.fieldId}`;
  errorId = `field-error-${this.fieldId}`;

  getHasError(): boolean {
    return !!this.fieldControl().ngControl.control?.errors && this.ngForm.submitted;
  }
}
