import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsResponseVm } from '@app/models/news-response.model';
import { RecipeBlogVm } from '@app/models/recipe-blog.model';
import { mapNewsResponseVmToRecipesBlogVmList } from '@app/utils/mapper.util';
import { assetsConfig } from '@assets/assets.config';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsMockApi {
  public getRecipeBlogs(): Observable<RecipeBlogVm[]> {
    const newsListPath = assetsConfig.path.newsList;
    return this.http
      .get(newsListPath)
      .pipe(map(mapNewsResponseVmToRecipesBlogVmList));
  }

  constructor(readonly http: HttpClient) {}
}
