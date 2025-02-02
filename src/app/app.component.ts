import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'I love Angular';
  tooltip = 'Very Cool';

  show (): void {
    alert('Hello');
  }
}
