import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, TopbarComponent, CommonModule],
  template: `
    <div class="layout-wrapper" [class.sidebar-collapsed]="collapsed()">
      <app-sidebar [collapsed]="collapsed()" (toggle)="collapsed.set(!collapsed())" />
      <div class="layout-main">
        <app-topbar (menuToggle)="collapsed.set(!collapsed())" />
        <main class="layout-content">
          <router-outlet />
        </main>
      </div>
    </div>
  `
})
export class ShellComponent {
  collapsed = signal(false);
}
