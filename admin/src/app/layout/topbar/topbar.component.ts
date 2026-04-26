import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, BadgeModule, AvatarModule],
  template: `
    <header class="topbar">
      <button class="topbar-menu-btn" (click)="menuToggle.emit()">
        <i class="pi pi-bars"></i>
      </button>

      <div class="topbar-right">
        <button class="topbar-icon-btn" pBadge value="3" severity="danger">
          <i class="pi pi-bell"></i>
        </button>
        <p-avatar label="A" shape="circle" styleClass="topbar-avatar" />
        <div class="topbar-user">
          <span class="topbar-user-name">Admin</span>
          <span class="topbar-user-role">Community Admin</span>
        </div>
      </div>
    </header>
  `
})
export class TopbarComponent {
  @Output() menuToggle = new EventEmitter<void>();
}
