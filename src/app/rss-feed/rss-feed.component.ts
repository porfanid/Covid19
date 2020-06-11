import {Component, Input, OnInit} from '@angular/core';
import {FeedService} from '../modules/feed.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RssFeedComponent implements OnInit {
  @Input() rssUurl;
  feeds;
  author;
  description;
  image;
  link;
  title;
  url;

  titles = {
    title: 'Title'
  };

  columnsToDisplay;
  expandedElement: PeriodicElement | null;
  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');

  constructor(public feedService: FeedService) {
  }

  ngOnInit(): void {
    this.columnsToDisplay = ['title'];
    this.feedService.getFeedContent(this.rssUurl).subscribe( data => {
      this.feeds = data.items;
      this.author = data.feed.author;
      this.description = data.feed.description;
      this.image = data.feed.image;
      this.link = data.feed.link;
      this.title = data.feed.title;
      this.url = data.feed.url;
      console.log(this.feeds);
    });
  }

}
export interface PeriodicElement {
  author: string;
  content: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

