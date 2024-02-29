import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  postsSubject$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private storageService: StorageService) {
    this.list();
  }

  create(content: string) {
    const newPost: Post = {
      id: this.postsSubject$.getValue().length + 1,
      name: "Meu usuário",
      username: "myuser",
      postedAt: new Date(),
      content: content,
      photo_url: "https://avatars.githubusercontent.com/u/62712621?v=4",
      likes: 10,
      isAlreadyLiked: false,
    };

    const currentPosts = this.postsSubject$.getValue();
    const updatedPosts = [newPost, ...currentPosts];

    this.storageService.set(updatedPosts);
    this.postsSubject$.next(updatedPosts);
  }

  list() {
    const storedPosts = this.storageService.get();

    if (storedPosts) {
      this.postsSubject$.next(storedPosts);
    }
  }

  remove(id: number) {
    const allPosts = this.postsSubject$.getValue();
    const filteredPosts = allPosts.filter((posts) => posts.id !== id);
    this.storageService.set(filteredPosts);
    this.postsSubject$.next(filteredPosts);
  }

  update(id: number, content: string) {
    const allPosts = this.postsSubject$.getValue();
    const postToUpdate = allPosts.find((post) => post.id === id);

    if (postToUpdate) {
      postToUpdate.content = content;
      postToUpdate.postedAt = new Date();
    }

    this.storageService.set(allPosts);
    this.postsSubject$.next(allPosts);
  }

  toggleLike(id: number) {
    const allPosts = this.postsSubject$.getValue();
    const postToLike = allPosts.find((post) => post.id === id);

    if (postToLike) {
      postToLike.isAlreadyLiked = !postToLike.isAlreadyLiked;
      postToLike.likes += postToLike.isAlreadyLiked ? 1 : -1;
    }

    this.storageService.set(allPosts);
    this.postsSubject$.next(allPosts);
  }
}
