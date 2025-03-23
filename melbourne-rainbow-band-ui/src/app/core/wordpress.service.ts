// wordpress.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WordpressService {
  private baseUrl = 'https://mrb.org.au/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/events`);
  }

  getPageBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pages?slug=${slug}`);
  }
}
