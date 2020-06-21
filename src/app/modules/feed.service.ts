import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Feed} from './model/feed';
import {JSONreader} from './jsonreader';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';
  data;
  constructor() { }

  getFeedContent(url: string): any{
    return JSONreader.getJSON(this.rssToJsonServiceBaseUrl + url, false);
  }

  private extractFeeds(res: Response): Feed {
    const feed = res.json();
    return feed || { };
  }
}
