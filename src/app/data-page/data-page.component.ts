import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {JSONreader} from '../modules/jsonreader';
import {ActivatedRoute} from '@angular/router';
import {ModalContentComponent} from './modal-content/modal-content.component';
import {LinkService} from './services/link.service';

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.css']
})
export class DataPageComponent implements OnInit {

  ip;
  contents;
  content;
  module;
  openBackDropCustomClass(content) {
    this.module = this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  openWindowCustomClass(content) {
    this.module = this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  constructor(private modalService: NgbModal, private route: ActivatedRoute, private link: LinkService) { }

  ngOnInit(): void {
    this.ip = window.location.hostname;
    this.route.params.subscribe(parmas => {
      const link = this.route.snapshot.paramMap.get('wikiLink');
      // console.log(params);
      if (link) {
        if (link.charAt(0) === '#'){
          return;
        }
        const linkToSubscribe = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts|info&exintro&format=json&explaintext&redirects&inprop=url&indexpageids&titles=' + link;
        this.link.changecountry(linkToSubscribe);
        this.openBackDropCustomClass(ModalContentComponent);
        this.link.setModule(this.module);
      }
    });
  }

}
