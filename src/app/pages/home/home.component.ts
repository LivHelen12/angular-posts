import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormPostComponent } from '../../components/post/form/form.component';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post/post.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { postComponent } from '../../components/post/post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormPostComponent,
    HeaderComponent,
    postComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  posts!: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.postsSubject$.subscribe((posts) => {
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    this.postService.postsSubject$.unsubscribe();
  }
}
