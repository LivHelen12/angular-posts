import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[action]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() color: "success" | "danger" = "success";

  @HostBinding('class.action') action = true;

  @HostBinding('class.success') get success() {
    return this.color === 'success';
  }

  @HostBinding('class.danger') get danger() {
    return this.color === 'danger';
  }
}
