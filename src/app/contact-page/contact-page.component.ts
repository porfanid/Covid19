import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor( private http: HttpClient ) { }

  myRecaptcha: boolean;

  resolved(captchaResponse: string) {
    console.log(`Resolved response token: ${captchaResponse}`);
    // tslint:disable-next-line:max-line-length
    const url = 'https://cors-anywhere.herokuapp.com/https://www.google.com/recaptcha/api/siteverify?secret=6LfWPKcZAAAAAAcGp2wxOB0TeLhWQngnUWtegsBN&response=' + captchaResponse;
    const response = this.http.get('http://www.google.com');
    response.subscribe(content => console.log(content) );
  }

  ngOnInit(): void {
  }

}
