import { Component, Input } from '@angular/core';
import { RecipeVm } from '@app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss',
})
export class RecipesListComponent {
  public recipesList: RecipeVm[] = [];

  @Input('recipesList')
  set setRecipesList(recipesList: RecipeVm[]) {
    this.recipesList = recipesList;
  }
}
