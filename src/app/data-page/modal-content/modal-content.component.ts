import {Component, Input, OnInit} from '@angular/core';
import {LinkService} from '../services/link.service';
import {JSONreader} from '../../modules/jsonreader';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  contents;
  title;
  modal;
  constructor(private link: LinkService) {
    link.currentLink.subscribe(url => {
      console.log('url');
      console.log(url);
      JSONreader.getJSON(url, true).subscribe(data => {
        console.log('data: ');
        console.log(data);
        const dict = data.query.pages;
        this.contents = dict[Object.keys(dict)[0]].extract;
        this.title = dict[Object.keys(dict)[0]].title;
        console.log('title');
        console.log(this.title);
        this.modal = link.module;
      });
    });
  }

  ngOnInit(): void {
  }

}
