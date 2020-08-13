import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  protected myTeam: any = [];

  constructor(private teamsService: TeamsService) {}

  ngOnInit() 
  {
    this.teamsService.getFavTeam().subscribe(data => {
      console.log(data)
      //this.myTeam = data;
    })
  }

}
