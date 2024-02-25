import { Component, Input } from '@angular/core';
import { Post } from '../../../interfaces/post';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from '../../../shared/photo/photo.component';
import { PostService } from '../../../services/post/post.service';
import { RouterModule } from '@angular/router';

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

export class postComponent {
  @Input() post!: Post;

  constructor(private postService: PostService) { }

  onDelete(id: number) {
    this.postService.remove(id);
  }
}
