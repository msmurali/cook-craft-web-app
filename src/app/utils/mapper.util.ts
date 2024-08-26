import { TrendingRecipesResponseVm } from '@app/models/trending-recipes-response.model';
import { CategoriesResponseVm } from '@models/categories-response.model';
import { CategoryResponseVm } from '@models/category-response.model';
import { RecipeVm } from '@app/models/recipe.model';
import { RecipeResponseVm } from '@app/models/recipe-response.model';
import {
  extractIngredientsFromRecipeResponseVm,
  extractInstructionsFromRecipeResponseVm,
} from '@utils/extractor.util';
import { SearchRecipesResponseVm } from '@app/models/search-recipes-response.model';
import {
  isValidCategoryRecipeResponseVm,
  isValidNewsArticleResponseVm,
  isValidRecipeResponseVm,
} from './validator.util';
import { CategoryRecipesResponseVm } from '@app/models/category-recipes-response.model';
import { CategoryRecipeResponseVm } from '@app/models/category-recipe-response.model';
import { NewsResponseVm } from '@app/models/news-response.model';
import { RecipeBlogVm } from '@app/models/recipe-blog.model';
import { NewsArticleResponseVm } from '@app/models/news-article-response.model';

export const mapCategoriesResponseVmToCategoriesStringList = (
  categoriesResponse: CategoriesResponseVm
): string[] => {
  if (categoriesResponse?.meals) {
    (<CategoryResponseVm[]>categoriesResponse.meals)
      ?.filter((categoryResponse) => categoryResponse?.strCategory)
      ?.map((categoryResponse) => categoryResponse.strCategory) as string[];
  }
  return [];
};

export const mapRecipeResponseVmToRecipeVm = (
  recipeResponse: RecipeResponseVm
): RecipeVm => {
  return {
    id: recipeResponse?.idMeal,
    title: recipeResponse?.strMeal,
    ingredients: extractIngredientsFromRecipeResponseVm(recipeResponse),
    instructions: extractInstructionsFromRecipeResponseVm(recipeResponse),
    thumbnailUrl: recipeResponse?.strMealThumb,
    youtubeVideUrl: recipeResponse?.strYoutube,
  } as RecipeVm;
};

export const mapCategoryRecipeResponseVmToRecipeVm = (
  categoryRecipeResponse: CategoryRecipeResponseVm
): RecipeVm => {
  return {
    id: categoryRecipeResponse?.idMeal,
    thumbnailUrl: categoryRecipeResponse?.strMealThumb,
    title: categoryRecipeResponse?.strMeal,
  } as RecipeVm;
};

export const mapTrendingRecipesResponseVmToRecipeVmList = (
  trendingRecipesResponse: TrendingRecipesResponseVm
): RecipeVm[] => {
  if (trendingRecipesResponse?.meals) {
    (<RecipeResponseVm[]>trendingRecipesResponse.meals)
      ?.filter(isValidRecipeResponseVm)
      .map(mapRecipeResponseVmToRecipeVm);
  }
  return [];
};

export const mapSearchRecipesResponseVmToRecipeVmList = (
  searchRecipesResponse: SearchRecipesResponseVm
): RecipeVm[] => {
  if (searchRecipesResponse?.meals) {
    (<RecipeResponseVm[]>searchRecipesResponse.meals)
      ?.filter(isValidRecipeResponseVm)
      .map(mapRecipeResponseVmToRecipeVm);
  }
  return [];
};

export const mapCategoryRecipesResponseVmToRecipeVmList = (
  categoryRecipesResponse: CategoryRecipesResponseVm
): RecipeVm[] => {
  if (categoryRecipesResponse?.meals) {
    (<CategoryRecipeResponseVm[]>categoryRecipesResponse.meals)
      ?.filter(isValidCategoryRecipeResponseVm)
      .map(mapCategoryRecipeResponseVmToRecipeVm);
  }
  return [];
};

export const mapNewsArticleResponseVmToRecipeBlogVm = (
  newsArticleResponse: NewsArticleResponseVm
): RecipeBlogVm => {
  return {
    description: newsArticleResponse?.description,
    sourceUrl: newsArticleResponse?.source,
    thumbnailUrl: newsArticleResponse?.urlToImage,
    title: newsArticleResponse?.title,
  } as RecipeBlogVm;
};

export const mapNewsResponseVmToRecipesBlogVmList = (
  newsResponse: NewsResponseVm
): RecipeBlogVm[] => {
  if (newsResponse?.articles) {
    (<NewsArticleResponseVm[]>newsResponse?.articles)
      ?.filter(isValidNewsArticleResponseVm)
      .map(mapNewsArticleResponseVmToRecipeBlogVm);
  }
  return [];
};
