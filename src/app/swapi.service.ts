import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  private baseUrl: string = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getPeople(page: number = 1): Observable<any> {
    return this.http.get(`${this.baseUrl}/people/?page=${page}`);
  }


  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/people/${id}`);
  }

  getDataByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
}
