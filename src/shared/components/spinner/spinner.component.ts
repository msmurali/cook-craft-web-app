import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { SpinnerService } from 'src/shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="isLoading$ | async" class="spinner-overlay">
      <div class="spinner">{{ isLoading$ | async }}</div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  isLoading$ = this.spinnerService.loading$;

  constructor(private spinnerService: SpinnerService) {
    this.isLoading$.pipe(tap(console.log)).subscribe();
  }
}
