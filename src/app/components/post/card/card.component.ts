import { Component } from '@angular/core';
import { PhotoComponent } from '../../user/photo/photo.component';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PhotoComponent, ContainerComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
