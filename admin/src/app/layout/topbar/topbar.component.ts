import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink, BadgeModule, AvatarModule],
  template: `
    <header class="topbar">
      <button class="topbar-menu-btn" (click)="menuToggle.emit()">
        <i class="pi pi-bars"></i>
      </button>

      <div class="topbar-search">
        <i class="pi pi-search"></i>
        <input type="search" placeholder="Search members, reports, groups..." />
      </div>

      <div class="topbar-right">
        <div class="topbar-pilot">
          <span>Scope</span>
          <strong>MK Community</strong>
        </div>
        <button class="topbar-icon-btn" pBadge value="3" severity="danger">
          <i class="pi pi-bell"></i>
        </button>
        <p-avatar label="A" shape="circle" styleClass="topbar-avatar" />
        <div class="topbar-user">
          <span class="topbar-user-name">Aylin Admin</span>
          <span class="topbar-user-role">Community Admin</span>
        </div>
        <button class="logout-btn" routerLink="/login">
          <i class="pi pi-sign-out"></i>
          <span>Logout</span>
        </button>
      </div>
    </header>
  `
})
export class TopbarComponent {
  @Output() menuToggle = new EventEmitter<void>();
}
