import { CategoryRecipeResponseVm } from '@app/models/category-recipe-response.model';
import { NewsArticleResponseVm } from '@app/models/news-article-response.model';
import { RecipeResponseVm } from '@app/models/recipe-response.model';

export const isValidRecipeResponseVm = (recipeResponse: RecipeResponseVm) =>
  recipeResponse?.idMeal &&
  recipeResponse?.strMeal &&
  recipeResponse?.strCategory &&
  recipeResponse?.strInstructions &&
  recipeResponse?.strMealThumb &&
  recipeResponse?.strYoutube;

export const isValidCategoryRecipeResponseVm = (
  categoryRecipeResponse: CategoryRecipeResponseVm
) =>
  categoryRecipeResponse?.idMeal &&
  categoryRecipeResponse?.strMeal &&
  categoryRecipeResponse?.strMealThumb;

export const isValidNewsArticleResponseVm = (
  newsArticleResponse: NewsArticleResponseVm
) =>
  newsArticleResponse?.url &&
  newsArticleResponse?.title &&
  newsArticleResponse?.urlToImage &&
  newsArticleResponse?.description;
