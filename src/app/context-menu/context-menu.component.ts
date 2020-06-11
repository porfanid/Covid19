import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../modules/data-service.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./style.scss']
})
export class ContextMenuComponent implements OnInit {

  countries = [];

  constructor(private dataService: DataServiceService) {
    this.countries = dataService.getCountries();
  }

  ngOnInit(): void {
  }

}
