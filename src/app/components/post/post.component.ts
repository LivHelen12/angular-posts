import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from '../../shared/photo/photo.component';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post/post.service';
import { DatetimePipe } from '../../pipes/datetime.pipe';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
    RouterModule,
    DatetimePipe
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent implements OnInit {
  @Input() post!: Post;
  isLiked!: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.isLiked = this.post.isAlreadyLiked;
  }

  onDelete(id: number) {
    this.postService.remove(id);
  }

  onLike(id: number) {
    this.isLiked = !this.post.isAlreadyLiked;
    this.postService.toggleLike(id);
  }
}
