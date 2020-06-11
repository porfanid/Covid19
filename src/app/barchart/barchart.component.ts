import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataServiceService} from '../modules/data-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit, OnDestroy {

  data;
  private country;
  sub;

  totalDeaths = 0;
  constructor(private dataService: DataServiceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.country = params.country;
      this.data = this.dataService.getData(this.country);
      if (!this.data) {
        this.router.navigate(['']);
      }
      this.totalDeaths = this.data.totalDeaths;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
