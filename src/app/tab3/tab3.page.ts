import { Component } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private statsService: StatsService) {}

  protected stats: any = [];

  ngOnInit()
  {
    this.statsService.getStats().subscribe(data => {
      this.stats = data;
    })
  }

}
