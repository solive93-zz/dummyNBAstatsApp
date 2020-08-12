import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  protected apiUrl = 'https://free-nba.p.rapidapi.com/';

  getTeams()
  {
    let response = this.http.get(this.apiUrl + 'teams', { headers: {
        "x-rapidapi-key": "398fc55a3emsh5cb0fb47f92da62p1c9017jsn9bdb0ac2a947",
      } 
    });
    return response;
  }
}
