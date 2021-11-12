import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() wasSelectedRecipe = new EventEmitter<Recipe>();
  recipes = [
    {name:'A Test Recipe', description:'This is simply a test', imagePath:'https://www.licious.in/blog/wp-content/uploads/2020/12/Roast-Chicken-600x600.jpg'},
    {name:'Another Test Recipe', description:'This is simply another test', imagePath:'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.wasSelectedRecipe.emit(recipe);
  }

}
