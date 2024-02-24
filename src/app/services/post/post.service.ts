import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Post } from '../../types/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  apiUrl = "./assets/data.json";

  constructor(private apiService: ApiService) { }

  getPosts() {
    return this.apiService.get<Post[]>(this.apiUrl);
  }
}
