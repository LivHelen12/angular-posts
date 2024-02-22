import { PostService } from './../../services/post.service';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormPostComponent } from '../../components/post/form/form.component';
import { CardComponent } from '../../components/post/card/card.component';
import { Post } from '../../types/post';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormPostComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor() { }
}
