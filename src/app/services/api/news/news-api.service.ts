import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponseVm } from '@app/models/news-response.model';
import { RecipeBlogVm } from '@app/models/recipe-blog.model';
import { mapNewsResponseVmToRecipesBlogVmList } from '@app/utils/mapper.util';
import { apiConfig } from '@configs/api.config';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApi {
  public getRecipeBlogs(page: number): Observable<[RecipeBlogVm[], number]> {
    const newsListPath = apiConfig.newsApi.urls.getRecipeBlogsUrl(page);
    return this.http
      .get(newsListPath)
      .pipe(
        map((newsResponse: NewsResponseVm) => [
          mapNewsResponseVmToRecipesBlogVmList(newsResponse),
          newsResponse?.totalResults || 0,
        ])
      );
  }

  constructor(readonly http: HttpClient) {}
}
