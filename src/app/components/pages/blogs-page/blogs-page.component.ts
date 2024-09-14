import { Component } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import {
  getRecipeBlogs,
  initRecipeBlogs,
  setCurrentPage,
} from '@app/store/recipe-blogs/recipe-blogs.actions';
import {
  selectRecipeBlogs$,
  selectRecipeBlogsCurrentPage$,
  selectRecipeBlogsPerPage$,
  selectTotalRecipeBlogs$,
} from '@app/store/recipe-blogs/recipe-blogs.selectors';
import { Store } from '@ngrx/store';
import { combineLatest, map, mapTo, tap } from 'rxjs';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.scss',
})
export class BlogsPageComponent {
  readonly recipeBlogs$ = this.store.select(selectRecipeBlogs$);
  readonly totalRecipeBlogs$ = this.store.select(selectTotalRecipeBlogs$);
  readonly currentPage$ = this.store.select(selectRecipeBlogsCurrentPage$);
  readonly recipesBlogsPerPage$ = this.store.select(selectRecipeBlogsPerPage$);
  readonly disableCheckPreviousBtn$ = this.currentPage$.pipe(
    map((currentPage) => currentPage === 1)
  );
  readonly disableCheckNextBtn$ = combineLatest([
    this.totalRecipeBlogs$,
    this.currentPage$,
    this.recipesBlogsPerPage$,
  ]).pipe(
    map(([totalBlogs, currentPage, perPage]) => {
      const totalPages = Math.ceil(totalBlogs / perPage);
      console.log(totalPages, currentPage)
      return totalPages === currentPage;
    })
  );

  constructor(readonly store: Store<AppState>) {
    this.initRecipeBlogsPage();
  }

  initRecipeBlogsPage() {
    this.store.dispatch(initRecipeBlogs());
  }

  setCurrentPage(page: number) {
    console.log(page);
    this.store.dispatch(setCurrentPage({ page }));
  }

  moveToPreviousPage(currentPage: number) {
    this.setCurrentPage(currentPage - 1);
  }

  moveToNextPage(currentPage: number) {
    this.setCurrentPage(currentPage + 1);
  }
}
