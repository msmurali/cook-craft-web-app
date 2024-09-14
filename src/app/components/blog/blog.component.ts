import { Component, Input } from '@angular/core';
import { RecipeBlogVm } from '@app/models/recipe-blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  public blog!: RecipeBlogVm;

  @Input('blog')
  set setBlog(blog: RecipeBlogVm) {
    this.blog = blog;
  }

  onClickBlog(sourceUrl: string) {
    window.open(sourceUrl, '_black');
  }
}
