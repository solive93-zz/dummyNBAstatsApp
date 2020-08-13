import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(protected http: HttpClient) { }

  protected apiUrl = 'https://free-nba.p.rapidapi.com/';

  getStats()
  {
    return this.http.get(this.apiUrl + 'stats', { headers: {
      "x-rapidapi-key": "398fc55a3emsh5cb0fb47f92da62p1c9017jsn9bdb0ac2a947"
      }
    })
  }
}
