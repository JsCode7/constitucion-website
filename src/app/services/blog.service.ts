import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = '/assets/blog-posts.json';

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.blogUrl);
  }

  getBlogPostById(id: number): Observable<any> {
    return this.http.get<any[]>(this.blogUrl).pipe(
      map(posts => posts.find(post => post.id === id))
    );
  }
}
