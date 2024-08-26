import { NewsArticleResponseVm } from './news-article-response.model';

export interface NewsResponseVm {
  status?: string | null;
  totalResults?: number | null;
  articles?: NewsArticleResponseVm[] | null;
}
