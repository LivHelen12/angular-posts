import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormPostComponent } from '../../components/post/form/form.component';
import { CardComponent } from '../../components/post/card/card.component';
import { CommonModule } from '@angular/common';
import { Post } from '../../types/post';
import { PostApiService } from '../../services/post/post-api.service';

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
  posts: Post[] = [];

  constructor(private postApiService: PostApiService) { }

  ngOnInit() {
    this.posts = this.postApiService.getPosts();
  }
}
