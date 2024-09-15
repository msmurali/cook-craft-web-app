import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
})
export class SubscriptionComponent {
  public email: string = '';
  private apiUrl =
    'https://cook-craft-web-70fvywo1h-msmuralis-projects.vercel.app/api/subscribe';

  onSubscribe() {
    if (this.email) {
      this.http.post(this.apiUrl, { email: this.email });
    } else {
      this.toast.showErrorToast('Email is mandatory to subscribe');
    }
  }

  constructor(readonly toast: ToastService, readonly http: HttpClient) {}
}
