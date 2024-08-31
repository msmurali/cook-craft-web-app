import * as fromRecipesFeature from '@app/store/recipes/recipes.reducer';
import * as fromCategoryRecipesFeature from '@app/store/recipe-categories/recipe-categories.reducer';
import * as fromBlogRecipesFeature from '@app/store/recipe-blogs/recipe-blogs.reducer';


export interface AppState {
  recipes: fromRecipesFeature.RecipesState;
  categoryRecipes: fromCategoryRecipesFeature.RecipeCategoriesState;
  recipeBlogs: fromBlogRecipesFeature.RecipeBlogsState;
}

export const appState: AppState = {
  recipes: fromRecipesFeature.recipesState,
  categoryRecipes: fromCategoryRecipesFeature.recipeCategoriesState,
  recipeBlogs: fromBlogRecipesFeature.recipeBlogsState,
};

export const appReducer = {
  recipes: fromRecipesFeature.recipesReducer,
  categoryRecipes: fromCategoryRecipesFeature.recipeCategoriesRecuder,
  recipeBlogs: fromBlogRecipesFeature.recipeBlogsReducer,
};
