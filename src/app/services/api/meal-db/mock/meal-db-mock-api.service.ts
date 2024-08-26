import { Injectable } from '@angular/core';
import { assetsConfig } from '@assets/assets.config';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  mapCategoriesResponseVmToCategoriesStringList,
  mapCategoryRecipesResponseVmToRecipeVmList,
  mapSearchRecipesResponseVmToRecipeVmList,
  mapTrendingRecipesResponseVmToRecipeVmList,
} from '@utils/mapper.util';
import { CategoriesResponseVm } from '@models/categories-response.model';
import { RecipeResponseVm } from '@app/models/recipe-response.model';
import { RecipeVm } from '@app/models/recipe.model';
import { TrendingRecipesResponseVm } from '@app/models/trending-recipes-response.model';
import { SearchRecipesResponseVm } from '@app/models/search-recipes-response.model';
import { CategoryRecipesResponseVm } from '@app/models/category-recipes-response.model';

@Injectable({
  providedIn: 'root',
})
export class MealDbMockApi {
  public getCategories(): Observable<string[]> {
    const categoriesListPath = assetsConfig.path.categoriesList;
    return this.http
      .get(categoriesListPath)
      .pipe(
        map((json) =>
          mapCategoriesResponseVmToCategoriesStringList(
            json as CategoriesResponseVm
          )
        )
      );
  }

  public getTrendingRecipes(): Observable<RecipeVm[]> {
    const recipesListPath = assetsConfig.path.recipesList;
    return this.http
      .get(recipesListPath)
      .pipe(
        map((json) =>
          mapTrendingRecipesResponseVmToRecipeVmList(
            json as TrendingRecipesResponseVm
          )
        )
      );
  }

  public searchRecipes(_: string): Observable<RecipeVm[]> {
    const recipesListPath = assetsConfig.path.recipesList;
    return this.http
      .get(recipesListPath)
      .pipe(
        map((json) =>
          mapSearchRecipesResponseVmToRecipeVmList(
            json as SearchRecipesResponseVm
          )
        )
      );
  }

  public getRecipesFromCategory(category: string): Observable<RecipeVm[]> {
    const categoryRecipesPath = assetsConfig.path.categoryrecipesList;
    return this.http
      .get(categoryRecipesPath)
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
