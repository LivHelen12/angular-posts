import { Injectable } from '@angular/core';
import { Post } from '../../types/post';
import { StorageService } from '../storage/storage.service';

const defaultPosts = [
  {
    id: 1,
    name: "Jhon Doe",
    username: "jhondoe",
    postedAt: new Date(),
    content: "Proin a est nec ligula tincidunt auctor sit amet ac magna. Vivamus cursus lobortis turpis, quis scelerisque metus hendrerit ut. Duis et mauris eu ante scelerisque ullamcorper sit amet id enim. Sed lacinia augue id velit sagittis egestas. Aliquam eget gravida dui, nec cursus sem. Mauris in tincidunt purus, a interdum elit. Proin tempor volutpat diam dictum porta. Proin velit mi, sollicitudin dictum dignissim vitae, facilisis vel lorem. Quisque porttitor pretium libero, id tristique mi iaculis vulputate. Nullam dolor sapien, commodo a laoreet non, hendrerit vel ante. Etiam eu efficitur enim. Sed tempor non orci nec rutrum. Vestibulum convallis feugiat lorem vel tempor. Maecenas non hendrerit nisi, ac aliquet dolor.",
    photo_url: "https://avatars.githubusercontent.com/u/62712621?v=4"
  }
];
@Injectable({
  providedIn: 'root'
})

export class PostApiService {
  storageKey = "post";
  posts: Post[];

  constructor(private storageService: StorageService) {
    this.posts = this.storageService.get(this.storageKey) || defaultPosts;
  }

  getPosts() {
    return this.posts;
  }

  createPost(content: string) {
    const newPost: Post = {
      id: this.posts.length + 1,
      name: "Meu usuário",
      username: "myuser",
      postedAt: new Date(),
      content: content,
      photo_url: "https://avatars.githubusercontent.com/u/62712621?v=4"
    };

    this.posts = [newPost, ...this.posts];
    this.storageService.set(this.storageKey, this.posts);
  }
}
