import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=news_desk:("Technology" "Science")&api-key=XYpkAwUHjuuhs0NzAGNsguSVwlLCrS0R';

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

}