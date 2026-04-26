import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';

const MEMBERS = [
  { name: 'Ali Yılmaz',   email: 'ali@example.com',   role: 'Admin',     groups: 4, joined: 'Jan 2025', status: 'Active' },
  { name: 'Ayşe Kaya',    email: 'ayse@example.com',  role: 'Moderator', groups: 3, joined: 'Feb 2025', status: 'Active' },
  { name: 'Mehmet Demir', email: 'mehmet@example.com',role: 'Member',    groups: 2, joined: 'Mar 2025', status: 'Viewer' },
  { name: 'Sara Lale',    email: 'sara@example.com',  role: 'Member',    groups: 3, joined: 'Mar 2025', status: 'Active' },
  { name: 'Fatma Kılıç',  email: 'fatma@example.com', role: 'Member',    groups: 1, joined: 'Apr 2025', status: 'Active' },
];

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, FormsModule, TableModule, TagModule, ButtonModule, InputTextModule, AvatarModule],
  template: `
    <div class="page-header">
      <h1>Members</h1>
      <span class="page-subtitle">{{ members.length }} total members</span>
    </div>

    <div class="page-toolbar">
      <span class="p-input-icon-left">
        <i class="pi pi-search"></i>
        <input pInputText placeholder="Search members…" [(ngModel)]="search" />
      </span>
    </div>

    <p-table [value]="members" [paginator]="true" [rows]="10" styleClass="p-datatable-sm p-datatable-striped">
      <ng-template pTemplate="header">
        <tr>
          <th>Member</th>
          <th>Role</th>
          <th>Groups</th>
          <th>Joined</th>
          <th>Status</th>
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
          <td><p-tag [value]="m.role" [severity]="m.role === 'Admin' ? 'info' : m.role === 'Moderator' ? 'warn' : 'secondary'" /></td>
          <td>{{ m.groups }}</td>
          <td>{{ m.joined }}</td>
          <td><p-tag [value]="m.status" [severity]="m.status === 'Active' ? 'success' : 'warn'" /></td>
          <td>
            <button pButton icon="pi pi-ellipsis-v" class="p-button-text p-button-sm p-button-rounded"></button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `
})
export class MembersComponent {
  members = MEMBERS;
  search = '';
}
