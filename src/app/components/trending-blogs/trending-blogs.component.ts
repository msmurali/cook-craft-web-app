import { Component } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { selectRecipeBlogs$ } from '@app/store/recipe-blogs/recipe-blogs.selectors';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-trending-blogs',
  templateUrl: './trending-blogs.component.html',
  styleUrl: './trending-blogs.component.scss',
})
export class TrendingBlogsComponent {
  readonly trendingBlogs$ = this.store
    .select(selectRecipeBlogs$)
    .pipe(map((blogs) => blogs.slice(0, 5)));

  constructor(readonly store: Store<AppState>) {}
}
