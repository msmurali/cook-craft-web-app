import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeBlogVm } from '@app/models/recipe-blog.model';
import { mapNewsResponseVmToRecipesBlogVmList } from '@app/utils/mapper.util';
import { apiConfig } from '@configs/api.config';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  public getRecipeBlogs(page: number): Observable<RecipeBlogVm[]> {
    const newsListPath = apiConfig.newsApi.urls.getRecipeBlogsUrl(page);
    return this.http
      .get(newsListPath)
      .pipe(map(mapNewsResponseVmToRecipesBlogVmList));
  }

  constructor(readonly http: HttpClient) {}
}
