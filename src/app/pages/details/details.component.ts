import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormPostComponent } from '../../components/form/form.component';
import { PostComponent } from '../../components/post/post.component';
import { HeaderComponent } from '../../components/ui//header/header.component';
import { PhotoComponent } from '../../components/ui//photo/photo.component';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post/post.service';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, PhotoComponent, PostComponent, FormPostComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post!: Post | undefined;
  receivedPost!: Post;
  private _destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.getPostById();
  }

  onEdit(post: Post) {
    this.receivedPost = { ...post };
  }

  getPostById() {
    const id = Number(this.route.snapshot.paramMap.get('postId'));

    this.postService.asById(id).pipe(takeUntil(this._destroy$)).subscribe(post => this.post = post)
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
