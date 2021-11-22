import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import { Store } from '@ngrx/store';
import {Subject} from "rxjs";
import * as ShoppingListActions from "../shopping-list/store/shopping-list.actions";
import * as fromShoppingList from "../shopping-list/store/shopping-list.reducer";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Rotisserie Chicken Recipe',
  //     'This is simply a test',
  //     'https://www.licious.in/blog/wp-content/uploads/2020/12/Roast-Chicken-600x600.jpg',
  //     [
  //       new Ingredient('Chicken', 2),
  //       new Ingredient('French Fries', 20)
  //     ]),
  //   new Recipe(
  //     'Pizza Recipe',
  //     'This is simply another test',
  //     'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
  //     [
  //       new Ingredient('Chicken', 5),
  //       new Ingredient('Cheese', 2),
  //     ])
  // ];

  private recipes: Recipe[];

  constructor(private store: Store<fromShoppingList.AppState>) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    if (this.recipes) {
      return this.recipes.slice();
    }
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.shoppingListService.addRecipeIngredients(ingredients);
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
