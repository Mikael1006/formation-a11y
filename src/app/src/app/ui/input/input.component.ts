import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fieldControlHostDirective } from '../field/field-control.directive';

@Component({
  selector: 'input[app-input]',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: '',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [fieldControlHostDirective],
})
export class InputComponent {}
