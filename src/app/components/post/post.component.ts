import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from '../../shared/photo/photo.component';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
    RouterModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent {
  @Input() post!: Post;

  constructor(private postService: PostService) { }

  onDelete(id: number) {
    this.postService.remove(id);
  }
}
