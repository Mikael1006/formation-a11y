import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputFieldComponent } from '../ui/input-field/input-field.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
