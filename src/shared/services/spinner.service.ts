import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable()
export class SpinnerService {
  public loadingSubject = new BehaviorSubject<boolean>(false);

  public get loading$(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  public show(): void {
    this.loadingSubject.next(true);
  }

  public hide(): void {
    this.loadingSubject.next(false);
  }
}
