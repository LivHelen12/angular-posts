import { ModalService } from './../../services/modal/modal.service';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from '../../shared/photo/photo.component';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post/post.service';
import { DatetimePipe } from '../../pipes/datetime.pipe';
import { ModalComponent } from '../../shared/modal/modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
    RouterModule,
    DatetimePipe,
    ModalComponent,
    OverlayModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent implements OnInit {
  @Input() post!: Post;
  isLiked!: boolean;

  constructor(private postService: PostService, private modalService: ModalService) { }

  ngOnInit() {
    this.isLiked = this.post.isAlreadyLiked;
  }

  onSetModal(postId: number) {
    if (this.modalService.isModalOpen(postId)) {
      return this.modalService.closeModal();
    }

    return this.modalService.openModal(postId);
  }

  isModalOpen(postId: number): boolean {
    return this.modalService.isModalOpen(postId);
  }

  onLike(id: number) {
    this.isLiked = !this.post.isAlreadyLiked;
    this.postService.toggleLike(id);
  }
}
