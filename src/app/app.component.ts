import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
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
  router = inject(Router);
  onCardClick() {
    this.router.navigate(["/profile"]);
  }
}
