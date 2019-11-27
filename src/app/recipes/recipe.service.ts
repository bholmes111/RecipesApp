import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();

  // private recipes: Recipe[] = [
  //     new Recipe("Tasty Schnitzel",
  //     "Yummy schnitzel",
  //     "https://upload.wikimedia.org/wikipedia/commons/6/67/Elote_recipe.jpg",
  //     [new Ingredient('Meat',1),
  //     new Ingredient('French Fries',20)]),
  //     new Recipe("Big Fat Burger",
  //     "Beefy",
  //     "https://upload.wikimedia.org/wikipedia/commons/6/67/Elote_recipe.jpg",
  //     [new Ingredient('Buns',2),
  //     new Ingredient('Meat',1)])
  //    ];
  private recipes: Recipe[] = [];

  constructor(
    private store: Store<fromShoppingList.AppState> // private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  getRecipes() {
    return this.recipes.slice(); // Use slice to return a copy, not a reference
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
