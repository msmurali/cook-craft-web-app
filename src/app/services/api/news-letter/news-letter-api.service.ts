import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from '@configs/api.config';

@Injectable({
  providedIn: 'root',
})
export class NewsLetterApi {
  public subscribeNewsLetter(email: string) {
    const path = apiConfig.newsLetterApi.urls.getSubscriptionUrl();
    return this.http.post(path, { email });
  }

  public unsubScribeNewsLetter(email: string) {
    const path = apiConfig.newsLetterApi.urls.getUnsubscribeUrl();
    return this.http.post(path, { email });
  }

  constructor(readonly http: HttpClient) {}
}
