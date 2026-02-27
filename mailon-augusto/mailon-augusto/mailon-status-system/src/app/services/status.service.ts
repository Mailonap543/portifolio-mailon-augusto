import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private readonly API = 'http://localhost:8080/api/status';

  constructor(private http: HttpClient) { }

  getPlayerData(): Observable<any> {
    return this.http.get<any>(this.API);
  }
}
