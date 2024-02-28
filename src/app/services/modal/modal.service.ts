import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  open$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  openModal() {
    this.open$.next(true);
  }

  closeModal() {
    this.open$.next(false);
  }
}
