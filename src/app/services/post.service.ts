import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private postsSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {
    this.fetchPosts();
  }

  getPosts(): Observable<Post[]> {
    return this.postsSubject.asObservable();
  }

  private fetchPosts(): void {
    this.http.get<Post[]>('/assets/data.json').subscribe(posts => {
      this.postsSubject.next(posts);
    });
  }

  createPost(content: string): void {
    const newPost: Post = {
      id: Math.floor(Math.random() * 1000),
      name: "Novo usuário",
      username: "novo_usuario",
      photo_url: "https://avatars.githubusercontent.com/u/62712621?v=4",
      postedAt: new Date(),
      content: content,
    };

    const currentPosts = this.postsSubject.getValue();
    const updatedPosts = [...currentPosts, newPost];
    this.savePosts(updatedPosts);
  }

  private savePosts(posts: Post[]): void {
    this.http.put('/assets/data.json', posts).subscribe(() => {
      this.postsSubject.next(posts);
    });
  }
}
