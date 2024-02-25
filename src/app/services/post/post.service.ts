import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../../types/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  storageKey = "posts";
  postsSubject$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  post!: Post[];

  constructor(private storageService: StorageService) {
    this.list();
  }

  create(content: string) {
    const newPost: Post = {
      id: Math.random(),
      name: "Meu usuário",
      username: "myuser",
      postedAt: new Date(),
      content: content,
      photo_url: "https://avatars.githubusercontent.com/u/62712621?v=4"
    };

    const currentPosts = this.postsSubject$.getValue();
    const updatedPosts = [newPost, ...currentPosts];

    this.storageService.set(this.storageKey, updatedPosts);
    this.postsSubject$.next(updatedPosts);
  }

  list() {
    const storedPosts = this.storageService.get(this.storageKey);

    if (storedPosts) {
      this.postsSubject$.next(storedPosts);
    }
  }
}
