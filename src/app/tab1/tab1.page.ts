import { Component } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  protected games: any = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit() 
  {
    this.gamesService.getGames().subscribe(data => {
      this.games = data;
    })
  }

}
