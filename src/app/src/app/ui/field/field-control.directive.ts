import { booleanAttribute, computed, Directive, ElementRef, inject, input } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { FieldDirective } from './field.directive';

let nextId = 0;

@Directive({
  selector: '[appFieldControl]',
  standalone: true,
  host: {
    '[attr.id]': 'id()',
    '[class.field-control-error]': 'field.getHasError()',
    '[attr.aria-invalid]': 'field.getHasError()',
    '[attr.aria-labelledby]': 'field.labelId',
    '[attr.aria-describedby]': 'field.subLabelId + " " + field.errorId',
    '[required]': 'controlRequired()',
    '[attr.aria-required]]': 'controlRequired()',
  },
})
export class FieldControlDirective {
  elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  ngControl = inject(NgControl, {optional: true, self: true})!;
  field: FieldDirective = inject(FieldDirective);

  fieldControlId: number = nextId++;
  id = input(`field-control-${this.fieldControlId}`);
  popupId = computed(() => `${this.id()}-popup`);
  required = input(undefined, { transform: booleanAttribute });

  /**
   * Handle template driven form with input and reactive form with hasValidator
   */
  controlRequired = computed(() => this.required() ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false);
}
