import { DEFAULT_CATEGORY_QUERY_PARAM_VALUE } from '@app/constants/const';
import { environment } from 'src/environments/environment';
import { assetsConfig } from './assets.config';

const getCategoriesUrl = () => {
  const apiUrl = `${apiConfig.mealDbApi.baseUrl}${apiConfig.mealDbApi.paths.categories}?${apiConfig.mealDbApi.queryParams.category}=${DEFAULT_CATEGORY_QUERY_PARAM_VALUE}`;
  const mockApiUrl = assetsConfig.path.categoriesList;
  return isProdEnvironment() ? apiUrl : mockApiUrl;
};

const getTrendingRecipesUrl = () => {
  const apiUrl = `${apiConfig.mealDbApi.baseUrl}${apiConfig.mealDbApi.paths.trending}`;
  const mockApiUrl = assetsConfig.path.recipesList;
  return isProdEnvironment() ? apiUrl : mockApiUrl;
};

const getSearchRecipesUrl = (searchText: string) => {
  const apiUrl = `${apiConfig.mealDbApi.baseUrl}${apiConfig.mealDbApi.paths.search}?${apiConfig.mealDbApi.queryParams.search}=${searchText}`;
  const mockApiUrl = assetsConfig.path.recipesList;
  return isProdEnvironment() ? apiUrl : mockApiUrl;
};

const getRecipesFromCategoryUrl = (category: string) => {
  const apiUrl = `${apiConfig.mealDbApi.baseUrl}${apiConfig.mealDbApi.paths.searchByCategory}?${apiConfig.mealDbApi.queryParams.category}=${category}`;
  const mockApiUrl = assetsConfig.path.recipesList;
  return isProdEnvironment() ? apiUrl : mockApiUrl;
};

const getSearchRecipeByIdUrl = (id: string) => {
  const apiUrl = `${apiConfig.mealDbApi.baseUrl}${apiConfig.mealDbApi.paths.searchById}?${apiConfig.mealDbApi.queryParams.id}=${id}`;
  const mockApiUrl = assetsConfig.path.recipesList;
  return isProdEnvironment() ? apiUrl : mockApiUrl;
};

const getRecipeBlogsUrl = () => {
  const apiUrl = `${apiConfig.newsApi.baseUrl}?${apiConfig.newsApi.queryParams.query}=recipe&${apiConfig.newsApi.queryParams.searchIn}=title&${apiConfig.newsApi.queryParams.sortBy}=relevancy&${apiConfig.newsApi.queryParams.pageSize}=10&${apiConfig.newsApi.queryParams.page}=2&${apiConfig.newsApi.queryParams.apiKey}=${environment.apiKeys.newsApi}`;
  const mockApiUrl = assetsConfig.path.newsList;
  return isProdEnvironment() ? apiUrl : mockApiUrl;
};

export const apiConfig = {
  mealDbApi: {
    baseUrl: 'www.themealdb.com/api/json/v1/1',
    paths: {
      search: '/search.php',
      searchById: '/lookup.php',
      trending: '/randomselection.php',
      categories: '/list.php',
      searchByCategory: '/filter.php',
    },
    queryParams: {
      id: 'i',
      category: 'c',
      search: 's',
    },
    urls: {
      getCategoriesUrl,
      getTrendingRecipesUrl,
      getSearchRecipesUrl,
      getSearchRecipeByIdUrl,
      getRecipesFromCategoryUrl,
    },
  },
  newsApi: {
    baseUrl: 'https://newsapi.org/v2/everything',
    paths: {},
    queryParams: {
      query: 'q',
      searchIn: 'searchIn',
      sortBy: 'sortBy',
      pageSize: 'pageSize',
      page: 'page',
      apiKey: 'apiKey',
    },
    urls: {
      getRecipeBlogsUrl,
    },
  },
};

export const isProdEnvironment = () => {
  return environment.production;
};
