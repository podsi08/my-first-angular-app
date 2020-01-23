import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Some recipe', 'Very tasty dish', 'https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3-768x1154.jpg'),
    new Recipe('Some recipe 2', 'Very tasty dish 2', 'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected = (recipe: Recipe) => {
    this.recipeWasSelected.emit(recipe);
  }

}
