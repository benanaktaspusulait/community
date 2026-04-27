import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

type NavItem = {
  label: string;
  icon: string;
  route: string;
  badge?: string;
};

type NavSection = {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  items: NavItem[];
};

const NAV_SECTIONS: NavSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: 'pi pi-compass',
    items: [
      { label: 'Command Center', icon: 'pi pi-chart-line', route: '/dashboard' },
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    icon: 'pi pi-inbox',
    badge: '10',
    items: [
      { label: 'Reports', icon: 'pi pi-flag', route: '/reports', badge: '3' },
      { label: 'Approvals', icon: 'pi pi-check-circle', route: '/approvals', badge: '7' },
    ],
  },
  {
    id: 'community',
    label: 'Community',
    icon: 'pi pi-users',
    items: [
      { label: 'Members', icon: 'pi pi-users', route: '/members' },
      { label: 'Groups', icon: 'pi pi-sitemap', route: '/groups' },
    ],
  },
  {
    id: 'knowledge',
    label: 'Knowledge',
    icon: 'pi pi-book',
    items: [
      { label: 'Library', icon: 'pi pi-book', route: '/library' },
    ],
  },
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

      <nav class="sidebar-nav grouped">
        <section
          *ngFor="let section of sections"
          class="nav-section"
          [class.open]="isOpen(section.id)"
        >
          <button
            type="button"
            class="nav-section-toggle"
            [title]="section.label"
            (click)="toggleSection(section.id)"
          >
            <i [class]="section.icon"></i>
            <span *ngIf="!collapsed">{{ section.label }}</span>
            <strong class="nav-badge" *ngIf="!collapsed && section.badge">{{ section.badge }}</strong>
            <i *ngIf="!collapsed" class="pi pi-chevron-down section-chevron"></i>
          </button>

          <div class="nav-section-items" *ngIf="!collapsed && isOpen(section.id)">
            <a *ngFor="let item of section.items"
               [routerLink]="item.route"
               routerLinkActive="active"
               class="nav-item"
               [title]="item.label">
              <i [class]="item.icon"></i>
              <span>{{ item.label }}</span>
              <strong class="nav-badge" *ngIf="item.badge">{{ item.badge }}</strong>
            </a>
          </div>
        </section>
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
  sections = NAV_SECTIONS;
  openSections: Record<string, boolean> = {
    overview: true,
    operations: true,
    community: true,
    knowledge: true,
  };

  isOpen(sectionId: string) {
    return this.openSections[sectionId];
  }

  toggleSection(sectionId: string) {
    this.openSections = {
      ...this.openSections,
      [sectionId]: !this.openSections[sectionId],
    };
  }
}
