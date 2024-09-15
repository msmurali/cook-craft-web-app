import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpeechRecognitionService {
  private recognition!: SpeechRecognition;
  private result = new Subject<string>();

  constructor(readonly toast: ToastService) {
    const SpeechRecognition =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.showErrorToast("Couldn't start microphone");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      const results = event.results;
      if (results.length > 0) {
        const transcript = event.results[0][0].transcript;
        this.result.next(transcript);
      }
    };

    this.recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      toast.showErrorToast('Something went wrong, try again later');
    };
  }

  getSpeech$() {
    return this.result.asObservable();
  }

  start() {
    if (this.recognition) {
      this.recognition.start();
    }
  }

  stop() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }
}
