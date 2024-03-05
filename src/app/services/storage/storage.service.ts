import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly storageKey = "posts";


  set(value: Post[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(value));
  }

  get() {
    const value = localStorage.getItem(this.storageKey);
    return value ? JSON.parse(value) : null;
  }

  remove() {
    localStorage.removeItem(this.storageKey);
  }

  clear() {
    localStorage.clear();
  }
}
