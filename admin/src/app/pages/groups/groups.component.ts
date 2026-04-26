import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

const GROUPS = [
  { name: 'Housing',  emoji: '🏠', members: 248, threads: 34, visibility: 'Public' },
  { name: 'Legal',    emoji: '⚖️', members: 190, threads: 18, visibility: 'Public' },
  { name: 'Health',   emoji: '🏥', members: 210, threads: 22, visibility: 'Private' },
  { name: 'Jobs',     emoji: '💼', members: 175, threads: 15, visibility: 'Public' },
  { name: 'Services', emoji: '🔧', members: 130, threads: 9,  visibility: 'Public' },
  { name: 'Local',    emoji: '📍', members: 260, threads: 27, visibility: 'Public' },
];

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule],
  template: `
    <div class="page-header">
      <h1>Groups</h1>
      <span class="page-subtitle">{{ groups.length }} active groups</span>
      <button pButton label="New group" icon="pi pi-plus" class="p-button-sm ml-auto"></button>
    </div>

    <div class="groups-grid">
      <div class="group-card" *ngFor="let g of groups">
        <div class="group-emoji">{{ g.emoji }}</div>
        <div class="group-info">
          <span class="group-name">{{ g.name }}</span>
          <span class="group-meta">{{ g.members }} members · {{ g.threads }} threads</span>
        </div>
        <p-tag [value]="g.visibility" [severity]="g.visibility === 'Public' ? 'success' : 'warn'" />
        <button pButton icon="pi pi-cog" class="p-button-text p-button-sm p-button-rounded"></button>
      </div>
    </div>
  `
})
export class GroupsComponent {
  groups = GROUPS;
}
