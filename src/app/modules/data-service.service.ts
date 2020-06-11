import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {not} from 'rxjs/internal-compatibility';
import {JSONreader} from './jsonreader';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'https://opendata.ecdc.europa.eu/covid19/casedistribution/json/';
  private readonly tempList;
  private readonly countries;
  private readonly countriesDictionary;
  private readonly countriesGeoID;
  private readonly isComplete;
  constructor() {
    this.countries = [];
    this.tempList = {};
    this.countriesDictionary = {};
    this.isComplete = false;
    this.countriesGeoID = {};
    JSONreader.getJSON(this.url).subscribe(data => {
      data.records.reverse().forEach((record, index) => {
        if (this.countries.indexOf(record.countriesAndTerritories.toLowerCase()) === -1)
        {
          this.countries.push(record.countriesAndTerritories.toLowerCase());
          this.countriesDictionary[record.countriesAndTerritories.toLowerCase()] = record.countriesAndTerritories.replace(/_/g, ' ');
        }
        if (!(record.geoId in this.countriesGeoID))
        {
          this.countriesGeoID[record.geoId] = record.countriesAndTerritories.toLowerCase();
        }
        if (!(record.countriesAndTerritories.toLowerCase() in this.tempList))
        {
          this.tempList[record.countriesAndTerritories.toLowerCase()] = {
            sumCases: 0,
            sumDeaths: 0,
            record: [],
          };
        }
        this.tempList[record.countriesAndTerritories.toLowerCase()].sumCases += parseInt(record.cases, 10);
        this.tempList[record.countriesAndTerritories.toLowerCase()].sumDeaths += parseInt(record.deaths, 10);
        this.tempList[record.countriesAndTerritories.toLowerCase()].record.push({
          countriesAndTerritories: record.countriesAndTerritories.replace(/_/g, ' '),
          cases: record.cases,
          deaths: record.deaths,
          sumCases: this.tempList[record.countriesAndTerritories.toLowerCase()].sumCases,
          sumDeaths: this.tempList[record.countriesAndTerritories.toLowerCase()].sumDeaths,
          dateRep: record.dateRep,
          popData2018: record.popData2018,
          day: record.day,
          month: record.month,
          year: record.year,
          geoId: record.geoId
        });
      });
    });
    this.isComplete = true;
  }

  public getData(country: string){
    return this.tempList[country];
  }

  public getCountries(): any[]{
    return this.countries;
  }

  public getCountryFromGeoId(geoId: string) {
    return this.countriesGeoID[geoId];
  }

  public getCountryName(country: string){
    return this.countriesDictionary[country];
  }
  public wait(){
    while (!this.isComplete)
    {
    }
  }
}
