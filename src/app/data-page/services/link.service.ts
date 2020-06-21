import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private messageSource;
  currentLink;
  module: any;

  constructor() {
    this.messageSource = new BehaviorSubject('greece');
    this.currentLink = this.messageSource.asObservable();
  }

  setModule(module){
    this.module = module;
  }

  changecountry(message: string) {
    this.messageSource.next(message);
  }
}
