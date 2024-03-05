import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',  
})
export class ButtonComponent {
}
