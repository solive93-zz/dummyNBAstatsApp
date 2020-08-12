import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  protected apiUrl = 'https://free-nba.p.rapidapi.com/';
  protected sampleLogoLink = 'https://i.ytimg.com/vi/FJK-zqmwLNQ/hqdefault.jpg';

  getTeams()
  {
    return this.http.get(this.apiUrl + 'teams', { headers: {
        "x-rapidapi-key": "398fc55a3emsh5cb0fb47f92da62p1c9017jsn9bdb0ac2a947",
      } 
    });
    
  }

  getLogo()
  {
    return this.sampleLogoLink
  }
}
