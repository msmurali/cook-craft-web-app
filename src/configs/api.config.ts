import {
  DEFAULT_MEAL_DB_API_CATEGORY,
  DEFAULT_NEWS_API_PAGE_SIZE,
  DEFAULT_NEWS_API_QUERY,
  DEFAULT_NEWS_API_SEARCH_IN_PARAM,
  DEFAULT_NEWS_API_SORT_BY_PARAM,
} from '@app/constants/const';
import { environment } from 'src/environments/environment';
import { assetsConfig } from './assets.config';

const getCategoriesUrl = () => {
  const apiUrl = `${apiConfig.mealDbApi.baseUrl}${apiConfig.mealDbApi.paths.categories}?${apiConfig.mealDbApi.queryParams.category}=${DEFAULT_MEAL_DB_API_CATEGORY}`;
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
  const apiUrl = `${apiConfig.newsApi.baseUrl}`;
  const mockApiUrl = assetsConfig.path.newsList;
  return isProdEnvironment() ? apiUrl : mockApiUrl;
};

const getRecipeBlogsProxyUrl = (page: number) => {
  const apiUrl = `${apiConfig.newsApiProxy.baseUrl}${apiConfig.newsApiProxy.paths.proxy}?${apiConfig.newsApi.queryParams.query}=${DEFAULT_NEWS_API_QUERY}&${apiConfig.newsApi.queryParams.searchIn}=${DEFAULT_NEWS_API_SEARCH_IN_PARAM}&${apiConfig.newsApi.queryParams.sortBy}=${DEFAULT_NEWS_API_SORT_BY_PARAM}&${apiConfig.newsApi.queryParams.pageSize}=${DEFAULT_NEWS_API_PAGE_SIZE}&${apiConfig.newsApi.queryParams.page}=${page}`;
  const mockApiUrl = assetsConfig.path.newsList;
  return isProdEnvironment() ? apiUrl : mockApiUrl;
};

const getSubscriptionUrl = () => {
  const apiUrl = `${apiConfig.newsLetterApi.baseUrl}${apiConfig.newsLetterApi.paths.subscribe}`;
  return apiUrl;
};

const getUnsubscribeUrl = () => {
  const apiUrl = `${apiConfig.newsLetterApi.baseUrl}${apiConfig.newsLetterApi.paths.unsubscribe}`;
  return apiUrl;
}

export const apiConfig = {
  mealDbApi: {
    baseUrl: 'https://www.themealdb.com/api/json/v1/1',
    paths: {
      search: '/search.php',
      searchById: '/lookup.php',
      trending: '/search.php?f=c',
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
  newsApiProxy: {
    baseUrl: 'https://cook-craft-web-app.vercel.app',
    paths: {
      proxy: '/api/news-api-proxy'
    },
    queryParams: {
      query: 'q',
      searchIn: 'searchIn',
      sortBy: 'sortBy',
      pageSize: 'pageSize',
      page: 'page',
      apiKey: 'apiKey',
    },
    urls: {
      getRecipeBlogsProxyUrl,
    },
  },
  newsLetterApi: {
    baseUrl: 'https://cook-craft-web-app.vercel.app',
    paths: {
      subscribe: '/api/subscribe',
      unsubscribe: '/api/unsubscribe'
    },
    urls: {
      getSubscriptionUrl,
      getUnsubscribeUrl,
    },
  },
};

export const isProdEnvironment = () => {
  return environment.production;
};
