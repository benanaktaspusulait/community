import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

const GROUPS = [
  { name: 'Housing', type: 'Topic', icon: 'pi pi-home', members: 248, threads: 34, visibility: 'Public', policy: 'Approval off', health: 'Healthy' },
  { name: 'Legal', type: 'Topic', icon: 'pi pi-briefcase', members: 190, threads: 18, visibility: 'Public', policy: 'Approval on', health: 'Watch' },
  { name: 'Health', type: 'Sensitive', icon: 'pi pi-heart', members: 210, threads: 22, visibility: 'Private', policy: 'Approval on', health: 'Healthy' },
  { name: 'Jobs', type: 'Topic', icon: 'pi pi-building', members: 175, threads: 15, visibility: 'Public', policy: 'Approval off', health: 'Healthy' },
  { name: 'Services', type: 'Marketplace', icon: 'pi pi-wrench', members: 130, threads: 9, visibility: 'Public', policy: 'Ad review on', health: 'Watch' },
  { name: 'Ramazan Bayrami 2026', type: 'Special day', icon: 'pi pi-calendar-clock', members: 0, threads: 0, visibility: 'Invite-only', policy: 'Time-boxed', health: 'Scheduled' },
];

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule],
  template: `
    <div class="page-header elevated">
      <div>
        <span class="eyebrow">Community structure</span>
        <h1>Groups</h1>
        <span class="page-subtitle">{{ groups.length }} groups across topic, location, marketplace, and special-day spaces</span>
      </div>
      <div class="header-actions">
        <button pButton label="Suggest group queue" icon="pi pi-inbox" outlined></button>
        <button pButton label="New group" icon="pi pi-plus"></button>
      </div>
    </div>

    <div class="group-command-card">
      <div>
        <span class="eyebrow">Special-day operations</span>
        <h2>Invite members into temporary event groups without changing their normal memberships.</h2>
        <p>Use this for 23 Nisan, Eid, Bayram, networking days, and community celebrations. Groups become read-only archives after the active window.</p>
      </div>
      <button pButton label="Create special-day group" icon="pi pi-calendar-plus"></button>
    </div>

    <div class="groups-grid">
      <article class="group-card professional" *ngFor="let g of groups">
        <div class="group-icon"><i [class]="g.icon"></i></div>
        <div class="group-info">
          <div class="group-title-row">
            <span class="group-name">{{ g.name }}</span>
            <p-tag [value]="g.type" [severity]="typeSeverity(g.type)" />
          </div>
          <span class="group-meta">{{ g.members }} members · {{ g.threads }} threads · {{ g.policy }}</span>
        </div>
        <p-tag [value]="g.visibility" [severity]="g.visibility === 'Private' || g.visibility === 'Invite-only' ? 'warn' : 'success'" />
        <p-tag [value]="g.health" [severity]="g.health === 'Healthy' ? 'success' : g.health === 'Scheduled' ? 'info' : 'warn'" />
        <button pButton icon="pi pi-cog" class="p-button-text p-button-sm p-button-rounded" aria-label="Group settings"></button>
      </article>
    </div>
  `
})
export class GroupsComponent {
  groups = GROUPS;

  typeSeverity(type: string) {
    if (type === 'Sensitive') return 'danger';
    if (type === 'Special day') return 'info';
    if (type === 'Marketplace') return 'warn';
    return 'secondary';
  }
}
