import { contentChildren, Directive, inject } from '@angular/core';
import { InputFieldComponent } from '../ui/input-field/input-field.component';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[appFocusFirstErrorFieldOnSubmit]',
  standalone: true,
})
export class FocusFirstErrorFieldOnSubmitDirective {
  fields = contentChildren(InputFieldComponent);
  ngForm = inject(NgForm)!;
  subscribtion = this.ngForm.ngSubmit.asObservable().subscribe(() => {
    const errorField = this.fields().find((field) => field.getHasError());
    errorField?.inputComponent().elementRef.nativeElement.focus();
  });
}
