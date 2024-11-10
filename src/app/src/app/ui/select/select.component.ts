import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FieldControlDirective } from '../field/field-control.directive';
import { FieldDirective } from '../field/field.directive';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [FieldControlDirective],
  host: {
    role: 'combobox',
    tabindex: '0',
    ['attr.aria-expanded']: 'isOpen()',
    ['attr.aria-haspopup']: 'listbox',
    ['attr.aria-controls']: 'isOpen() ? fieldControl.popupId() : null',
  }
})
export class SelectComponent implements ControlValueAccessor {
  field = inject(FieldDirective);
  fieldControl = inject(FieldControlDirective);

  isOpen = signal(false);
  value = signal(null);

  constructor() {
    this.fieldControl.ngControl.valueAccessor = this;
  }

  writeValue(value: any): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
}
