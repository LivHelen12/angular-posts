import { Component } from '@angular/core';
import { PhotoComponent } from '../../user/photo/photo.component';
import { ContainerComponent } from '../container/container.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostApiService } from '../../../services/post/post-api.service';
@Component({
  selector: 'app-form-post',
  standalone: true,
  imports: [PhotoComponent, ContainerComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormPostComponent {

  postForm = new FormGroup({
    post: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(280)])
  });

  constructor(private postApiService: PostApiService) { }

  onSubmit() {
    if (this.postForm.valid) {
      this.postApiService.createPost(this.postForm.value.post || "");
      this.postForm.reset();
    }
  };
}
