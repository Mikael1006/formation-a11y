import { computed, contentChild, Directive, ElementRef, inject, input } from '@angular/core';
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
  id = input(`field-${this.fieldId}`);
  labelId = computed(() => `${this.id()}-label`);
  subLabelId = computed(() => `${this.id()}-subLabel`);
  errorId = computed(() => `${this.id()}-error`);

  getHasError(): boolean {
    return !!this.fieldControl().ngControl.control?.errors && this.ngForm.submitted;
  }
}

export const fieldHostDirective = {
  directive: FieldDirective,
  inputs: ['id'],
};
