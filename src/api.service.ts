import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=news_desk:("Technology""Science")';
  ApiKey = 'api-key=XYpkAwUHjuuhs0NzAGNsguSVwlLCrS0R'
  pagination = '0'

  
  constructor(private http: HttpClient) { }

  getArticles () {
    return this.http.get(`${this.baseUrl}&${this.ApiKey}`);
  }

}