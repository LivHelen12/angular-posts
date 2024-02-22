import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = './assets/data.json';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl).pipe(
      catchError(() => {
        console.error('Erro ao obter os posts do servidor. Retornando array vazio.');
        return of([]);
      })
    );
  }

  createPost(content: string): Observable<Post[]> {
    return this.getPosts().pipe(
      map(posts => {
        const newPost: Post = {
          id: Math.floor(Math.random() * 1000),
          name: "Novo usuário",
          username: "novo_usuario",
          photo_url: "https://avatars.githubusercontent.com/u/62712621?v=4",
          postedAt: new Date(),
          content: content
        };
        posts.push(newPost);
        return posts;
      })
    );
  }
}
