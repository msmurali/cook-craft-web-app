import { Component } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { getRecipeByName } from '@app/store/recipes/recipes.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  public searchText: string = '';

  onSearch() {
    if (this.searchText) {
      this.store.dispatch(getRecipeByName({ name: this.searchText }));
    }
  }

  constructor(readonly store: Store<AppState>) {}
}
