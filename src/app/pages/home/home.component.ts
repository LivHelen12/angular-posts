import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormPostComponent } from '../../components/post/form/form.component';
import { CardComponent } from '../../components/post/card/card.component';
import { CommonModule } from '@angular/common';
import { Post } from '../../types/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormPostComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
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
}
