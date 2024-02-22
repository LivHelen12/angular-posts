import { Component, EventEmitter, Output } from '@angular/core';
import { PhotoComponent } from '../../user/photo/photo.component';
import { ContainerComponent } from '../container/container.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../../services/post.service';
@Component({
  selector: 'app-form-post',
  standalone: true,
  imports: [PhotoComponent, ContainerComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormPostComponent {
  postForm!: FormGroup;

  constructor(private postService: PostService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      post: [null],
    });
  }

  onSubmit() {
    this.postService.createPost(this.postForm.value).subscribe(post => {
      console.log('Post criado:', post);
      this.postForm.reset();
    })
  };
}
