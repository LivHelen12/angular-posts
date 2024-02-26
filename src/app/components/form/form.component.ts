import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PhotoComponent } from '../../shared/photo/photo.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { TextareaComponent } from '../../shared/textarea/textarea.component';
import { PostService } from '../../services/post/post.service';
import { ActionsComponent } from '../../shared/actions/actions.component';
@Component({
  selector: 'app-form-post',
  standalone: true,
  imports: [
    PhotoComponent,
    ReactiveFormsModule,
    ButtonComponent,
    TextareaComponent,
    ActionsComponent
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormPostComponent {
  postForm = new FormGroup({
    post: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(190)])
  });

  constructor(private postService: PostService) { }

  onSubmit() {
    if (this.postForm.valid) {
      this.postService.create(this.postForm.value.post || "");
      this.postForm.reset();
    }
  };
}
