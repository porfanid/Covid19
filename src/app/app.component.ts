import {Component, OnInit} from '@angular/core';
import {DataServiceService} from './modules/data-service.service';
import {Meta} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataServiceService, private meta: Meta, private router: Router){
    dataService.wait();
    const author = 'Pavlos A. Orfanidis';
    const description = 'This is a site to inform you about the live data on covid 19';
    meta.addTags([
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@alligatorio' },
      {name: 'description', content: description},
      {name: 'keywords', content: ''},
      {name: 'robots', content: 'index,follow'},
      {httpEquiv: 'expires', content: (24 * 60 * 60).toString()},
      {name: 'author', content: author},
      {name: 'copyright', content: author},
      {property: 'og:url', content: this.router.url},
      {property: 'og:type', content: 'article'},
      {property: 'og:title', content: 'Covid19'},
      {property: 'og:image', content: 'Covid19'},
      {property: 'og:description', content: description},
    ], true);
  }

  ngOnInit(): void {
  }
}
