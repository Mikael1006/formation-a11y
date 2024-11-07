import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'input[app-input]',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: '',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.id]': 'id',
  }
})
export class InputComponent {
  elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);

  id = input(`input-${nextId++}`);
}
