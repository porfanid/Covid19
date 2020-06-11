import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../modules/data-service.service';
import {CountryService} from '../modules/country.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  selectedOption;
  countries;
  dataOrBarchart;

  constructor(public dataService: DataServiceService, private data: CountryService, private router: Router) {
    this.dataOrBarchart = 'countries';
  }
  makeBarchart() {
    this.dataOrBarchart = 'barchart';
    this.router.navigate(['/' + this.selectedOption]);
    // console.log
    this.data.changeMessage(this.selectedOption);
  }
  makeData() {
    this.dataOrBarchart = 'countries';
    this.router.navigate(['/' + this.selectedOption]);
    this.data.changeMessage(this.selectedOption);
    // this.router.navigate([]);
  }

  changeValue(newValue){
    this.selectedOption = newValue;
    console.log('value changed to: ' + newValue);
    this.data.changeMessage(newValue);
    this.router.navigate(['/' + newValue]);
    this.data.changeMessage(newValue);
  }

  ngOnInit(): void {
    this.countries = this.dataService.getCountries();
    this.selectedOption = 'afghanistan';
    // this.changeValue(this.selectedOption);
    this.makeData();
    this.data.currentMessage.subscribe(message => this.selectedOption = message);
  }

}
