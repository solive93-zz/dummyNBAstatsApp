import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  teams: any;
  constructor(private teamsService: TeamsService) { }

  ngOnInit() 
  {
    this.teamsService.getTeams().subscribe(data => {
      this.teams = data
    })
  }

}
