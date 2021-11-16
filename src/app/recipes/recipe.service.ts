import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Rotisserie Chicken Recipe',
      'This is simply a test',
      'https://www.licious.in/blog/wp-content/uploads/2020/12/Roast-Chicken-600x600.jpg',
      [
        new Ingredient('Chicken', 2),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Pizza Recipe',
      'This is simply another test',
      'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
      [
        new Ingredient('Chicken', 5),
        new Ingredient('Cheese', 2),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addRecipeIngredients(ingredients);
  }
}
