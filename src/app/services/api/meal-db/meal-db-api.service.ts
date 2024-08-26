import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesResponseVm } from '@app/models/categories-response.model';
import { CategoryRecipesResponseVm } from '@app/models/category-recipes-response.model';
import { RecipeVm } from '@app/models/recipe.model';
import { SearchRecipesResponseVm } from '@app/models/search-recipes-response.model';
import { TrendingRecipesResponseVm } from '@app/models/trending-recipes-response.model';
import {
  mapCategoriesResponseVmToCategoriesStringList,
  mapCategoryRecipesResponseVmToRecipeVmList,
  mapSearchRecipesResponseVmToRecipeVm,
  mapSearchRecipesResponseVmToRecipeVmList,
  mapTrendingRecipesResponseVmToRecipeVmList,
} from '@app/utils/mapper.util';
import { apiConfig } from '@configs/api.config';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealDbApi {
  public getCategories(): Observable<string[]> {
    const path = apiConfig.mealDbApi.urls.getCategoriesUrl();
    return this.http
      .get(path)
      .pipe(
        map((json) =>
          mapCategoriesResponseVmToCategoriesStringList(
            json as CategoriesResponseVm
          )
        )
      );
  }

  public getTrendingRecipes(): Observable<RecipeVm[]> {
    const path = apiConfig.mealDbApi.urls.getTrendingRecipesUrl();
    return this.http
      .get(path)
      .pipe(
        map((json) =>
          mapTrendingRecipesResponseVmToRecipeVmList(
            json as TrendingRecipesResponseVm
          )
        )
      );
  }

  public searchRecipes(searchText: string): Observable<RecipeVm[]> {
    const path = apiConfig.mealDbApi.urls.getSearchRecipesUrl(searchText);
    return this.http
      .get(path)
      .pipe(
        map((json) =>
          mapSearchRecipesResponseVmToRecipeVmList(
            json as SearchRecipesResponseVm
          )
        )
      );
  }

  public searchRecipeById = (id: string): Observable<RecipeVm | null> => {
    const path = apiConfig.mealDbApi.urls.getSearchRecipeByIdUrl(id);
    return this.http
      .get(path)
      .pipe(
        map((json) =>
          mapSearchRecipesResponseVmToRecipeVm(json as SearchRecipesResponseVm)
        )
      );
  };

  public getRecipesFromCategory(category: string): Observable<RecipeVm[]> {
    const path = apiConfig.mealDbApi.urls.getRecipesFromCategoryUrl(category);
    return this.http
      .get(path)
      .pipe(
        map((json) =>
          mapCategoryRecipesResponseVmToRecipeVmList(
            json as CategoryRecipesResponseVm
          )
        )
      );
  }

  constructor(readonly http: HttpClient) {}
}
