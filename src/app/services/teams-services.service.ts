import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsServicesService {

  constructor(private http: HttpClient) { }

  getTeams()
  {
    this.http.get('https://free-nba.p.rapidapi.com/teams?page=0');
  }
}
