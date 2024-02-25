import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  set(key: string, value: Post[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
