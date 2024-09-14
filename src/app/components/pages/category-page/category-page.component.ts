import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/store/app.reducer';
import { getRecipesByCategory } from '@app/store/recipe-categories/recipe-categories.actions';
import { selectRecipesByCategory$ } from '@app/store/recipe-categories/recipe-categories.selectors';
import { assetsConfig } from '@configs/assets.config';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss',
})
export class CategoryPageComponent implements OnInit {
  readonly recipesByCategories$ = this.store.select(selectRecipesByCategory$);
  readonly categoryColors$ = this.http.get(
    assetsConfig.path.categoryColorsList
  ) as Observable<{ [key: string]: string }>;
  public category!: string;

  constructor(
    readonly store: Store<AppState>,
    readonly activateRoute: ActivatedRoute,
    readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.category = this.activateRoute.snapshot.params['category'];
    this.loadRecipesByCategories(this.category);
  }

  loadRecipesByCategories(category: string) {
    if (category) {
      this.store.dispatch(getRecipesByCategory({ category }));
    }
  }

  getBackground(colors: { [key: string]: string }) {
    return `${colors[this.category]}`;
  }

  getTextBackground(colors: { [key: string]: string }) {
    return `text linear-gradient(${colors[this.category]} 50%, transparent)`;
  }
}
