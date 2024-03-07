import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post/post.service';
import { HeaderComponent } from '../../components/ui//header/header.component';
import { Subject, takeUntil } from 'rxjs';
import { PostComponent } from '../../components/post/post.component';
import { FormPostComponent } from '../../components/form/form.component';

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
  posts!: Post[];
  private unsubscribe$ = new Subject<void>();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.postsSubject$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((posts) => {
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
