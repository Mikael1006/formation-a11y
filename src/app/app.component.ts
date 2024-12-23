import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AriaCurrentPageDirective } from './src/app/a11y/aria-current-page.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AriaCurrentPageDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formation-a11y';
}
