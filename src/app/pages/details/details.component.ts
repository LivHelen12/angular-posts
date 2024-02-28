import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../interfaces/post';
import { PhotoComponent } from '../../shared/photo/photo.component';
import { Subject, takeUntil } from 'rxjs';
import { PostComponent } from '../../components/post/post.component';
import { FormPostComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PhotoComponent, PostComponent, FormPostComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post!: Post | undefined;
  receivedPost!: Post;
  unsubscribed$: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.getPostById();
  }

  onEdit(post: Post) {
    this.receivedPost = post;
  }

  getPostById() {
    const id = Number(this.route.snapshot.paramMap.get('postId'));

    this.postService.postsSubject$.pipe(
      takeUntil(this.unsubscribed$)
    ).subscribe((posts) => {
      const post = posts.find((post) => post.id === Number(id));
      this.post = post;
    });
  };

  ngOnDestroy() {
    this.unsubscribed$.next();
    this.unsubscribed$.complete();
  }
}
