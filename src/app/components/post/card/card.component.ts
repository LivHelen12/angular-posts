import { PostService } from './../../../services/post.service';
import { Component, Input } from '@angular/core';
import { PhotoComponent } from '../../user/photo/photo.component';
import { ContainerComponent } from '../container/container.component';
import { Post } from '../../../types/post';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EmptyComponent } from '../../empty-state/empty-state.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
    ContainerComponent,
    EmptyComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  posts!: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
