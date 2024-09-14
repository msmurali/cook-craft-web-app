import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/store/app.reducer';
import { getRecipeById } from '@app/store/recipes/recipes.actions';
import { selectRecipe$ } from '@app/store/recipes/recipes.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss',
})
export class RecipePageComponent {
  readonly recipe$ = this.store.select(selectRecipe$);
  public recipeId!: string;

  constructor(
    readonly store: Store<AppState>,
    readonly activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeId = this.activateRoute.snapshot.params['recipeId'];
    this.loadRecipeById(this.recipeId);
  }

  loadRecipeById(recipeId: string) {
    if (recipeId) {
      this.store.dispatch(getRecipeById({ id: recipeId }));
    }
  }
}
