import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { selectCategories$ } from '@app/store/recipe-categories/recipe-categories.selectors';
import { assetsConfig } from '@configs/assets.config';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  readonly categories$!: Observable<string[]>;
  readonly categoryColors$ = this.http.get(
    assetsConfig.path.categoryColorsList
  );

  constructor(readonly store: Store<AppState>, readonly http: HttpClient) {
    this.categories$ = this.store.select(selectCategories$);
  }

  getBackground = (color: string) =>
    {
      return `linear-gradient(180deg, transparent, ${color})`;
    };
}
