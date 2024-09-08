import { Component } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { getCategories } from '@app/store/recipe-categories/recipe-categories.actions';
import { getTrendingRecipes } from '@app/store/recipes/recipes.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(readonly store: Store<AppState>) {
    this.loadCategories();
    this.loadTrendingRecipes();
  }

  loadCategories() {
    this.store.dispatch(getCategories());
  }

  loadTrendingRecipes() {
    this.store.dispatch(getTrendingRecipes());
  }
}
