import { IngredientVm } from './ingredient.model';

export interface RecipeVm {
  id: string;
  title: string;
  instructions?: string[];
  ingredients?: IngredientVm[];
  thumbnailUrl: string;
  youtubeVideUrl?: string;
}
