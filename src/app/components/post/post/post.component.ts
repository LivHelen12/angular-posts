import { Component, Input } from '@angular/core';
import { Post } from '../../../interfaces/post';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from '../../../shared/photo/photo.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class postComponent {
  @Input() post!: Post;

  constructor() { }
}
