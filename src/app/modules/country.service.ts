import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private messageSource;
  currentMessage;

  constructor() {
    this.messageSource = new BehaviorSubject('greece');
    this.currentMessage = this.messageSource.asObservable();
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
