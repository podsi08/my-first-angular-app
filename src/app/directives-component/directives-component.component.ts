import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-component',
  templateUrl: './directives-component.component.html',
  styleUrls: ['./directives-component.component.css']
})
export class DirectivesComponentComponent {
  showName = true;
  fruitsList = ['apple', 'mango'];
  currentFruitName = '';

  toggleNameVisibility = () => {
    this.showName = !this.showName;
  }

  getDynamicColor = () => {
    if (this.showName) {
      return 'blue';
    }
    return 'red';
  }

  addToFruitsList = (fruitName) => {
    this.fruitsList.push(fruitName);
    this.currentFruitName = '';
  }
}
