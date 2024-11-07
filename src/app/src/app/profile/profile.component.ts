import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputFieldComponent } from '../ui/input-field/input-field.component';
import { InputComponent } from '../ui/input/input.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    FormsModule,
    InputComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
  name = 'Moreau';
  firstname = 'Mikael';
  phone = '';
}
