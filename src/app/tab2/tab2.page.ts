import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  protected teams: any = [];
  protected sampleLogo: string = "";

  constructor(private teamsService: TeamsService) { }

  ngOnInit() 
  { 
    this.teamsService.getTeams().subscribe(data => {
      this.teams = data
    })

    this.sampleLogo = this.teamsService.getLogo();
  }

}
