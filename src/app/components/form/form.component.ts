import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PhotoComponent } from '../../components/ui//photo/photo.component';
import { ButtonComponent } from '../../components/ui//button/button.component';
import { TextareaComponent } from '../../components/ui//textarea/textarea.component';
import { PostService } from '../../services/post/post.service';
import { Post } from '../../interfaces/post';
@Component({
  selector: 'app-form-post',
  standalone: true,
  imports: [
    PhotoComponent,
    ReactiveFormsModule,
    ButtonComponent,
    TextareaComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormPostComponent implements OnChanges {
  @Input() receivedPost!: Post;

  postForm = new FormGroup({
    post: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(190)])
  });

  constructor(private postService: PostService) { }

  ngOnChanges(changes: SimpleChanges) {
    const { currentValue } = changes["receivedPost"];

    if (currentValue) {
      this.postForm.get("post")?.setValue((currentValue as Post).content);
    }
  }

  onEdit() {
    if (this.postForm.valid) {
      this.postService.update(this.receivedPost.id, this.postForm.value.post || "");
      this.postForm.reset();
    }
  }

  onSubmit() {
    if (this.receivedPost) {
      return this.onEdit();
    }

    if (this.postForm.valid) {
      this.postService.create(this.postForm.value.post || "");
      this.postForm.reset();
    }
  };

  get isTweetButtonDisabled() {
    const inputField = this.postForm.get("post");
    return Boolean(inputField?.invalid || inputField?.pristine);
  }
}
