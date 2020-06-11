import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataServiceService} from '../modules/data-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit, OnDestroy {
  data;
  private country;
  private sub;
  constructor(private dataService: DataServiceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.country = params.country;
      this.data = this.dataService.getData(this.country);
      if (!this.data) {
        this.router.navigate(['']);
      }
    });
  }
  toInt(n: string): number{
    return parseInt(n, 10);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
