import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';

import { FormPostComponent } from '../../components/form/form.component';
import { PostComponent } from '../../components/post/post.component';
import { HeaderComponent } from '../../components/ui//header/header.component';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post/post.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormPostComponent,
    HeaderComponent,
    PostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  // Considerando que o exemplo é uma request HTTP
  posts!: Post[];

  get posts$(): Observable<Post[]> {
    return this.postService.postsSubject$.asObservable();
  }

  private _destroy$ = new Subject<void>();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.postsSubject$.pipe(
      takeUntil(this._destroy$)
    ).subscribe({
      next: (value) => {
        this.posts = value;
        // loader = false
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        // loader = false
      }
    })
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
