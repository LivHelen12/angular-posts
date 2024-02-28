import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  openModalId$: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  constructor() { }

  openModal(postId: number) {
    this.openModalId$.next(postId);
  }

  closeModal() {
    this.openModalId$.next(null);
  }

  isModalOpen(postId: number) {
    return this.openModalId$.value === postId;
  }
}
