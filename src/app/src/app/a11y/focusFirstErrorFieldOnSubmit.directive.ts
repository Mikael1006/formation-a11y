import { contentChildren, Directive, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FieldDirective } from '../ui/field/field.directive';

@Directive({
  selector: '[appFocusFirstErrorFieldOnSubmit]',
  standalone: true,
})
export class FocusFirstErrorFieldOnSubmitDirective {
  fields = contentChildren(FieldDirective);
  ngForm = inject(NgForm)!;
  subscribtion = this.ngForm.ngSubmit.asObservable().subscribe(() => {
    const errorField = this.fields().find((field) => field.getHasError());
    errorField?.fieldControl().elementRef.nativeElement.focus();
  });
}
