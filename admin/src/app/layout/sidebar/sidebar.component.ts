import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

const NAV = [
  { label: 'Dashboard',  icon: 'pi pi-home',        route: '/dashboard' },
  { label: 'Members',    icon: 'pi pi-users',        route: '/members' },
  { label: 'Reports',    icon: 'pi pi-flag',         route: '/reports' },
  { label: 'Approvals',  icon: 'pi pi-check-circle', route: '/approvals' },
  { label: 'Library',    icon: 'pi pi-book',         route: '/library' },
  { label: 'Groups',     icon: 'pi pi-th-large',     route: '/groups' },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <span class="logo-icon"><i class="pi pi-users"></i></span>
        <span class="logo-text" *ngIf="!collapsed">Community</span>
      </div>

      <nav class="sidebar-nav">
        <a *ngFor="let item of nav"
           [routerLink]="item.route"
           routerLinkActive="active"
           class="nav-item"
           [title]="item.label">
          <i [class]="item.icon"></i>
          <span *ngIf="!collapsed">{{ item.label }}</span>
        </a>
      </nav>

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
