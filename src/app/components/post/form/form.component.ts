import { Component } from '@angular/core';
import { PhotoComponent } from '../../user/photo/photo.component';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-form-post',
  standalone: true,
  imports: [PhotoComponent, ContainerComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormPostComponent { }
