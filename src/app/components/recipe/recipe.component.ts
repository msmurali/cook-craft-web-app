import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '@app/store/app.reducer';
import { getRecipeById } from '@app/store/recipes/recipes.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent {
  readonly rating = new Array(this.getRandomRating());
  public title!: string;
  public tag!: string;
  public thumbnailUrl!: string;
  public recipeId!: string;

  constructor(readonly store: Store<AppState>) {}


  @Input('id')
  set setRecipeId(id: string) {
    this.recipeId = id;
  }

  @Input('title')
  set setTitle(title: string) {
    this.title = title;
  }

  @Input('tag')
  set setTag(tag: string) {
    this.tag = tag;
  }

  @Input('thumbnailUrl')
  set setThumbnailUrl(thumbnailUrl: string) {
    this.thumbnailUrl = thumbnailUrl;
  }

  getBackground() {
    return `url('${this.thumbnailUrl}') center/cover`;
  }

  getRandomRating() {
    return Math.floor(Math.random() * 5) + 1;
  }

  onClickRecipe(recipeId: string) {
    this.store.dispatch(getRecipeById({ id: recipeId }));
  }
}
