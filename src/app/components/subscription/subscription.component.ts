import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { subscribeNewsLetter } from '@app/store/news-letter/news-letter.actions';
import { Store } from '@ngrx/store';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
})
export class SubscriptionComponent {
  public email: string = '';

  onSubscribe() {
    if (this.email) {
      this.store.dispatch(subscribeNewsLetter({ email: this.email }));
    } else {
      this.toast.showErrorToast('Enter email to subscribe');
    }
  }

  constructor(
    readonly toast: ToastService,
    readonly http: HttpClient,
    readonly store: Store<AppState>
  ) {}
}
