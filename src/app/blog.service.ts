import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './post/post';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private base_url = environment.production ? 'https://blogapi.crevetor.org/posts/' : 'http://localhost:8000/posts/';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.base_url);
  }

  getPost(id:number): Observable<Post> {
    return this.http.get<Post>(this.base_url +  id);
  }
}
