import { Component, Input } from '@angular/core';
import { RecipeBlogVm } from '@app/models/recipe-blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  public blogList: RecipeBlogVm[] = [];

  @Input('blogList')
  set setBlogList(blogList: RecipeBlogVm[]) {
    this.blogList = blogList;
  }
}
