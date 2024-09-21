import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showInfoToast(message: string) {
    const toastElement = document.createElement('div');

    toastElement.textContent = message;

    toastElement.classList.add('toast');

    document.body.appendChild(toastElement);

    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 3000);
  }


  showErrorToast(message: string) {
    const toastElement = document.createElement('div');

    toastElement.textContent = message;

    toastElement.classList.add('toast', 'error');

    document.body.appendChild(toastElement);

    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 3000);
  }
}
