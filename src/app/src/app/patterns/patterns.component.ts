import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-patterns',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './patterns.component.html',
  styleUrl: './patterns.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatternsComponent { }
