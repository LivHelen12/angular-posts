import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { Post } from '../../../interfaces/post';
import { PostService } from '../../../services/post/post.service';
import { ModalService } from '../../../services/modal/modal.service';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    OverlayModule,
    ButtonComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() post!: Post;

  constructor(private modalService: ModalService) { }


  get isModalOpen() {
    return this.modalService.isModalOpen(this.post.id);
  }
}
