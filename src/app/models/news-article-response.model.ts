import { NewsSourceResponseVm } from './news-source-response.model';

export interface NewsArticleResponseVm {
  source?: NewsSourceResponseVm | null;
  author?: string | null;
  title?: string | null;
  description?: string | null;
  url?: string | null;
  urlToImage?: string | null;
  publishedAt?: string | null;
  content?: string | null;
}
