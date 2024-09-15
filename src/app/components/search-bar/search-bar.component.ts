import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '@app/store/app.reducer';
import { getRecipeByName } from '@app/store/recipes/recipes.actions';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { SpeechRecognitionService } from 'src/shared/services/speech-recognition.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public searchText: string = '';
  private speechSubscription!: Subscription;
  public isMicOn: boolean = false;

  onSearch() {
    if (this.searchText) {
      this.store.dispatch(getRecipeByName({ name: this.searchText }));
    }
  }

  stopSpeechRecognition() {
    this.speechRecognition.stop();
      this.isMicOn = false;
  }

  startOrStop() {
    if (this.isMicOn) {
      this.speechRecognition.stop();
      this.isMicOn = false;
    } else {
      this.speechRecognition.start();
      this.isMicOn = true;
    }
  }

  constructor(
    readonly store: Store<AppState>,
    readonly speechRecognition: SpeechRecognitionService
  ) {}

  ngOnDestroy(): void {
    this.speechSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.speechSubscription = this.speechRecognition
      .getSpeech$()
      .pipe(tap((speech) => (this.searchText = speech)))
      .subscribe();
  }
}
