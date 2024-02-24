import { Component, Input } from '@angular/core';
import { PhotoComponent } from '../../user/photo/photo.component';
import { ContainerComponent } from '../container/container.component';
import { Post } from '../../../types/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
    ContainerComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {
  @Input() post!: Post;

  constructor() { }

  ngOnInit() { }
}
