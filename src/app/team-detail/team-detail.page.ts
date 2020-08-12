import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  protected team: any = [];

  constructor(private activatedRoute: ActivatedRoute, private teamsService: TeamsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const teamId = paramMap.get('teamId')
      
      this.teamsService.getTeam(teamId).subscribe(data => {
        this.team = data
      })
      
    })

   
  }

}
