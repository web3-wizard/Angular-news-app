import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  APP_URL = 'localhost:8000';
  
  constructor(private http: HttpClient) {}

  getBreakingNews() {
    return this.http.get(this.APP_URL + '/breaking-news');
  }
}
