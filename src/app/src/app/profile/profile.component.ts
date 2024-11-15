import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputFieldComponent } from '../ui/input-field/input-field.component';
import { InputComponent } from '../ui/input/input.component';
import { FocusFirstErrorFieldOnSubmitDirective } from '../a11y/focusFirstErrorFieldOnSubmit.directive';
import { SelectComponent } from '../ui/select/select.component';
import { SelectFieldComponent } from '../ui/select-field/select-field.component';
import { FieldErrorComponent } from '../ui/field/field-error/field-error.component';
import { FieldSublabelComponent } from '../ui/field/field-sublabel/field-sublabel.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    FormsModule,
    InputComponent,
    FocusFirstErrorFieldOnSubmitDirective,
    SelectComponent,
    SelectFieldComponent,
    FieldErrorComponent,
    FieldSublabelComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
