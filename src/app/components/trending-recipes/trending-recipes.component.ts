import { Component } from '@angular/core';
import { RecipeVm } from '@app/models/recipe.model';
import { AppState } from '@app/store/app.reducer';
import { selectTrendingRecipes$ } from '@app/store/recipes/recipes.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trending-recipes',
  templateUrl: './trending-recipes.component.html',
  styleUrl: './trending-recipes.component.scss',
})
export class TrendingRecipesComponent {
  readonly trendingRecipesList$: Observable<RecipeVm[]> = this.store.select(
    selectTrendingRecipes$
  );

  constructor(readonly store: Store<AppState>) {}
}
