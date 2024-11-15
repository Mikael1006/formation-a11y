import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, Injector, input, OnInit, signal, viewChild } from '@angular/core';
import { FieldControlDirective, fieldControlHostDirective } from '../field/field-control.directive';
import { FieldDirective } from '../field/field.directive';
import { ControlValueAccessor } from '@angular/forms';
import { DOWN_ARROW, ENTER, ESCAPE, TAB } from '@angular/cdk/keycodes';
import { CdkListbox, CdkListboxModule } from '@angular/cdk/listbox';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
    CdkListboxModule,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [fieldControlHostDirective],
  host: {
    tabindex: '0',
    ['attr.aria-expanded']: 'isOpen()',
    ['attr.aria-owns']: 'isOpen() ? fieldControl.popupId() : null',
    '(keydown)': 'onKeydown($event)',
  }
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  field = inject(FieldDirective);
  fieldControl = inject(FieldControlDirective);
  options = input<string[]>([]);

  listbox = viewChild(CdkListbox);
  injector = inject(Injector);

  isOpen = signal(false);
  value = signal<any>(null);

  constructor() {
    this.fieldControl.ngControl.valueAccessor = this;
    effect(() => this.listbox()?.focus());
  }
  ngOnInit(): void {
    this.value.set(this.options()[0]);
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
      }
    } else {
      switch(keyCode) {
        case ENTER:
        case DOWN_ARROW:
          this.isOpen.set(true);
          event.preventDefault();
          break;
        default:
      }
    }
  }
}
