import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

const NAV = [
  { label: 'Command Center', icon: 'pi pi-chart-line', route: '/dashboard' },
  { label: 'Members', icon: 'pi pi-users', route: '/members' },
  { label: 'Reports', icon: 'pi pi-flag', route: '/reports', badge: '3' },
  { label: 'Approvals', icon: 'pi pi-check-circle', route: '/approvals', badge: '7' },
  { label: 'Library', icon: 'pi pi-book', route: '/library' },
  { label: 'Groups', icon: 'pi pi-sitemap', route: '/groups' },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span class="logo-icon"><i class="pi pi-shield"></i></span>
        <span class="logo-text" *ngIf="!collapsed">
          <strong>Community</strong>
          <small>Admin Console</small>
        </span>
      </div>

      <nav class="sidebar-nav">
        <a *ngFor="let item of nav"
           [routerLink]="item.route"
           routerLinkActive="active"
           class="nav-item"
           [title]="item.label">
          <i [class]="item.icon"></i>
          <span *ngIf="!collapsed">{{ item.label }}</span>
          <strong class="nav-badge" *ngIf="!collapsed && item.badge">{{ item.badge }}</strong>
        </a>
      </nav>

      <div class="sidebar-context" *ngIf="!collapsed">
        <span class="context-label">Active pilot</span>
        <strong>UK Turks - Milton Keynes</strong>
        <small>Private beta</small>
      </div>

      <button class="sidebar-toggle" (click)="toggle.emit()">
        <i [class]="collapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'"></i>
      </button>
    </aside>
  `
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();
  nav = NAV;
}
