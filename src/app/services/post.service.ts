import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>("./assets/data.json");
  }
}
