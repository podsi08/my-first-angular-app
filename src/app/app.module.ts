import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './features/recipeBook/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './features/recipeBook/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './features/recipeBook/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './features/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './features/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './features/recipeBook/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
