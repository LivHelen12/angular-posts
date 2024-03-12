import { CommonModule } from '@angular/common';
import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[action]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @HostBinding('class.action') action = true;
}
