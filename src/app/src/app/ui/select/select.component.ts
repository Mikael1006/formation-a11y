import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Injector, input, signal, viewChildren } from '@angular/core';
import { FieldControlDirective } from '../field/field-control.directive';
import { FieldDirective } from '../field/field.directive';
import { ControlValueAccessor } from '@angular/forms';
import { DOWN_ARROW, ENTER, ESCAPE } from '@angular/cdk/keycodes';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { SelectOptionDirective } from './select-option.directive';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
    SelectOptionDirective,
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
    '(keydown)': 'onKeydown($event)'
  }
})
export class SelectComponent implements ControlValueAccessor {
  field = inject(FieldDirective);
  fieldControl = inject(FieldControlDirective);
  options = input<string[]>([]);

  selectOptions = viewChildren(SelectOptionDirective);
  injector = inject(Injector);

  keyManager = new ActiveDescendantKeyManager(this.selectOptions, this.injector);

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

  onKeydown(event: KeyboardEvent) {
    const {keyCode} = event;
    if (this.isOpen()) {
      switch(keyCode) {
        case ESCAPE:
          this.isOpen.set(false);
          break;
        default:
          this.keyManager.onKeydown(event);
          event.preventDefault();
      }
    } else {
      switch(keyCode) {
        case ENTER:
        case DOWN_ARROW:
          this.isOpen.set(true);
          break;
        default:
      }
    }
  }
}
