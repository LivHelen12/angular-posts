import { ModalService } from './../../services/modal/modal.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from '../../components/ui//photo/photo.component';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post/post.service';
import { DatetimePipe } from '../../pipes/datetime.pipe';
import { ModalComponent } from '../../components/ui//modal/modal.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ButtonComponent } from '../ui/button/button.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    PhotoComponent,
    RouterModule,
    DatetimePipe,
    ModalComponent,
    OverlayModule,
    ButtonComponent
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})

export class PostComponent implements OnInit {
  @Input() post!: Post;
  @Input() showDeleteButton: boolean = true;
  @Input() showEditButton: boolean = false;
  @Output() editPost = new EventEmitter();
  isLiked!: boolean;

  constructor(private postService: PostService, private modalService: ModalService) { }

  ngOnInit() {
    this.isLiked = this.post.isAlreadyLiked;
  }

  onDelete(id: number) {
    this.postService.remove(id);
    this.modalService.closeModal();
  }

  get onClose(): void {
    return this.modalService.closeModal();
  }

  get onEdit() {
    return this.editPost.emit(this.post);
  }

  isModalOpen(postId: number): boolean {
    return this.modalService.isModalOpen(postId);
  }

  onSetModal(postId: number) {
    if (this.isModalOpen(postId)) {
      return this.modalService.closeModal();
    }

    return this.modalService.openModal(postId);
  }

  onLike(id: number) {
    this.isLiked = !this.post.isAlreadyLiked;
    this.postService.toggleLike(id);
  }
}
