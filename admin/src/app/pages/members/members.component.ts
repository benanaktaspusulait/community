import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';

const MEMBERS = [
  {
    name: 'Ali Yilmaz',
    email: 'ali@example.com',
    role: 'Admin',
    groups: 'All groups',
    joined: 'Jan 2025',
    status: 'Active',
    trust: 94,
    lastAction: 'Published admin pick',
  },
  {
    name: 'Ayse Kaya',
    email: 'ayse@example.com',
    role: 'Moderator',
    groups: 'Housing, Health, Services',
    joined: 'Feb 2025',
    status: 'Active',
    trust: 88,
    lastAction: 'Resolved report',
  },
  {
    name: 'Mehmet Demir',
    email: 'mehmet@example.com',
    role: 'Member',
    groups: 'Housing, Services',
    joined: 'Mar 2025',
    status: 'Viewer mode',
    trust: 41,
    lastAction: 'Viewer mode in Housing until May 3',
  },
  {
    name: 'Sara Lale',
    email: 'sara@example.com',
    role: 'Member',
    groups: 'Legal, Local, Events',
    joined: 'Mar 2025',
    status: 'Active',
    trust: 77,
    lastAction: 'Question moved to Local',
  },
  {
    name: 'Fatma Kilic',
    email: 'fatma@example.com',
    role: 'Member',
    groups: 'Health',
    joined: 'Apr 2025',
    status: 'Pending review',
    trust: 62,
    lastAction: 'Join request awaiting approval',
  },
];

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, TagModule, ButtonModule, InputTextModule, AvatarModule],
  template: `
    <div class="page-header elevated">
      <div>
        <span class="eyebrow">People operations</span>
        <h1>Members</h1>
        <span class="page-subtitle">{{ members.length }} members, roles, scopes, and moderation state</span>
      </div>
      <button pButton label="Invite people" icon="pi pi-user-plus"></button>
    </div>

    <div class="page-toolbar elevated-toolbar">
      <span class="p-input-icon-left search-control">
        <i class="pi pi-search"></i>
        <input pInputText placeholder="Search by name, email, group, or status..." [(ngModel)]="search" />
      </span>
      <button pButton label="Export" icon="pi pi-download" outlined></button>
    </div>

    <div class="triage-strip">
      <article class="triage-card">
        <span>Active members</span>
        <strong>1,240</strong>
        <small>312 invite-driven</small>
      </article>
      <article class="triage-card warn">
        <span>Viewer mode</span>
        <strong>1</strong>
        <small>Group-scoped penalty</small>
      </article>
      <article class="triage-card">
        <span>Scoped moderators</span>
        <strong>8</strong>
        <small>Coverage: 6 groups</small>
      </article>
    </div>

    <p-table [value]="members" [paginator]="true" [rows]="10" styleClass="p-datatable-sm professional-table">
      <ng-template pTemplate="header">
        <tr>
          <th>Member</th>
          <th>Role</th>
          <th>Scope</th>
          <th>Status</th>
          <th>Trust</th>
          <th>Last action</th>
          <th></th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-m>
        <tr>
          <td>
            <div class="member-cell">
              <p-avatar [label]="m.name[0]" shape="circle" />
              <div>
                <div class="member-name">{{ m.name }}</div>
                <div class="member-email">{{ m.email }}</div>
              </div>
            </div>
          </td>
          <td><p-tag [value]="m.role" [severity]="roleSeverity(m.role)" /></td>
          <td class="decision-cell">{{ m.groups }}</td>
          <td><p-tag [value]="m.status" [severity]="statusSeverity(m.status)" /></td>
          <td>
            <div class="trust-meter">
              <span [style.width.%]="m.trust"></span>
            </div>
            <small>{{ m.trust }}/100</small>
          </td>
          <td class="decision-cell">{{ m.lastAction }}</td>
          <td>
            <div class="action-btns">
              <button pButton icon="pi pi-eye" class="p-button-text p-button-sm p-button-rounded" aria-label="View member"></button>
              <button pButton icon="pi pi-shield" class="p-button-text p-button-sm p-button-rounded" aria-label="Moderate member"></button>
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `
})
export class MembersComponent {
  members = MEMBERS;
  search = '';

  roleSeverity(role: string) {
    if (role === 'Admin') return 'info';
    if (role === 'Moderator') return 'warn';
    return 'secondary';
  }

  statusSeverity(status: string) {
    if (status === 'Active') return 'success';
    if (status === 'Viewer mode') return 'warn';
    return 'secondary';
  }
}
