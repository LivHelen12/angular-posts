import { CommonModule } from '@angular/common';
import { PostService } from './../../services/post/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { Post } from '../../interfaces/post';
import { ModalService } from '../../services/modal/modal.service';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() post!: Post;
  isModalOpen!: boolean;

  constructor(private postService: PostService, private modalService: ModalService) { }

  onDelete(id: number) {
    this.postService.remove(id);
    this.onCloseModal();
  }

  onCloseModal() {
    this.modalService.closeModal();
  }
}
