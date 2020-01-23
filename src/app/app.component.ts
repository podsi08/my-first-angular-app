import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 'recipes';
  title = 'my-first-angular-app';

  onPageChanged = (subpageName: string) => {
    this.currentPage = subpageName;
  }
}
