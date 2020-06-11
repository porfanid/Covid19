import {Component, Input, OnInit} from '@angular/core';
import {CountryService} from '../modules/country.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  // country: string;

  constructor() { }

  ngOnInit(): void {
    // this.data.currentMessage.subscribe(message => { this.country = message; });
  }

}
