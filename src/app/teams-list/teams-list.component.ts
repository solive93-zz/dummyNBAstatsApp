import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {

  constructor(private teamsService: TeamsService) { }

  ngOnInit() 
  {
    this.teamsService.getTeams().subscribe(data =>{
      console.log(data)
    })
  }

}
