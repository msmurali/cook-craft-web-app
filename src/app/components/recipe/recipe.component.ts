import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  readonly rating = new Array(this.getRandomRating());
  public title!: string;
  public tag!: string;
  public thumbnailUrl!: string;


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

}
