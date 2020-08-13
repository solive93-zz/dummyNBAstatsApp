import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  protected apiUrl = 'https://free-nba.p.rapidapi.com/';

  getGames()
  {
    this.http.get(this.apiUrl + 'games', { headers: {
      "x-rapidapi-key": "398fc55a3emsh5cb0fb47f92da62p1c9017jsn9bdb0ac2a947"
      }
    })
  }

  getGame(gameId: string)
  {
    this.http.get(this.apiUrl + 'games/', { headers: {
      "x-rapidapi-key": "398fc55a3emsh5cb0fb47f92da62p1c9017jsn9bdb0ac2a947"
      }
    })
  }
}
