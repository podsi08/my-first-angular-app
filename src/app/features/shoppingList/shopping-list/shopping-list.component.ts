import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Plums', 10),
    new Ingredient('Eggs', 3),
  ];
  constructor() { }

  ngOnInit() {
  }

}
