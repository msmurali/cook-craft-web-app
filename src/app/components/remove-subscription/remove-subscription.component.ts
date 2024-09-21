import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { unsubscribeNewsLetter } from '@app/store/news-letter/news-letter.actions';
import { Store } from '@ngrx/store';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
  selector: 'app-remove-subscription',
  templateUrl: './remove-subscription.component.html',
  styleUrl: './remove-subscription.component.scss'
})
export class RemoveSubscriptionComponent {
  public email: string = '';

  onUnsubscribe() {
    if (this.email) {
     this.store.dispatch(unsubscribeNewsLetter({ email: this.email }));
    } else {
      this.toast.showErrorToast('Enter email to unsubscribe');
    }
  }

  constructor(
    readonly toast: ToastService,
    readonly http: HttpClient,
    readonly store: Store<AppState>
  ) {}
}
