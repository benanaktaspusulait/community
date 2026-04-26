import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

const ITEMS = [
  {
    type: 'JOIN',
    label: 'Fatma K. wants to join MK Community',
    meta: 'Invite source: Housing WhatsApp group',
    scope: 'MK Community',
    status: 'Pending',
    risk: 'Low',
    age: '2h ago',
    decision: 'Entry answers complete',
  },
  {
    type: 'AD',
    label: 'Accountant services MK',
    meta: 'Provider ad submitted by Ali Y.',
    scope: 'Housing group',
    status: 'Pending',
    risk: 'Medium',
    age: '3h ago',
    decision: 'Needs landing page check',
  },
  {
    type: 'RESOURCE',
    label: 'GP registration guide',
    meta: 'Golden knowledge card from Health threads',
    scope: 'Health group',
    status: 'Pending',
    risk: 'Low',
    age: '1d ago',
    decision: 'Source threads linked',
  },
  {
    type: 'GROUP',
    label: 'Ramazan Bayrami 2026',
    meta: 'Special-day group request',
    scope: 'All invited topic groups',
    status: 'Pending',
    risk: 'Low',
    age: '1d ago',
    decision: 'Time-boxed archive enabled',
  },
  {
    type: 'JOIN',
    label: 'Mehmet D. wants to join',
    meta: 'Manual admin invite',
    scope: 'Services group',
    status: 'Approved',
    risk: 'Low',
    age: '2d ago',
    decision: 'Approved by Aylin',
  },
];

@Component({
  selector: 'app-approvals',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  template: `
    <div class="page-header elevated">
      <div>
        <span class="eyebrow">Review operations</span>
        <h1>Approval Queue</h1>
        <span class="page-subtitle">{{ pending }} pending items across joins, ads, resources, and group requests</span>
      </div>
      <button pButton label="Approval policy" icon="pi pi-file-check" outlined></button>
    </div>

    <div class="queue-summary">
      <article *ngFor="let item of summary">
        <span>{{ item.label }}</span>
        <strong>{{ item.value }}</strong>
        <small>{{ item.detail }}</small>
      </article>
    </div>

    <p-table [value]="items" styleClass="p-datatable-sm professional-table">
      <ng-template pTemplate="header">
        <tr>
          <th>Type</th>
          <th>Request</th>
          <th>Scope</th>
          <th>Status</th>
          <th>Review note</th>
          <th></th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-item>
        <tr>
          <td><p-tag [value]="item.type" [severity]="typeSeverity(item.type)" /></td>
          <td>
            <strong>{{ item.label }}</strong>
            <small>{{ item.meta }} · {{ item.age }}</small>
          </td>
          <td>{{ item.scope }}</td>
          <td><p-tag [value]="item.status" [severity]="item.status === 'Pending' ? 'warn' : 'success'" /></td>
          <td class="decision-cell">{{ item.decision }}</td>
          <td>
            <div class="action-btns" *ngIf="item.status === 'Pending'; else decided">
              <button pButton label="Request edit" icon="pi pi-pencil" class="p-button-sm p-button-outlined"></button>
              <button pButton label="Reject" icon="pi pi-times" severity="danger" outlined class="p-button-sm"></button>
              <button pButton label="Approve" icon="pi pi-check" severity="success" class="p-button-sm"></button>
            </div>
            <ng-template #decided>
              <span class="quiet-label">Decision recorded</span>
            </ng-template>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `
})
export class ApprovalsComponent {
  items = ITEMS;

  summary = [
    { label: 'Join requests', value: '4', detail: '2 from invite links' },
    { label: 'Ads', value: '2', detail: 'User visibility respected' },
    { label: 'Resources', value: '1', detail: 'Golden knowledge' },
    { label: 'Group requests', value: '1', detail: 'Special day' },
  ];

  get pending() {
    return this.items.filter(i => i.status === 'Pending').length;
  }

  typeSeverity(type: string) {
    if (type === 'AD') return 'warn';
    if (type === 'RESOURCE') return 'success';
    if (type === 'GROUP') return 'info';
    return 'secondary';
  }
}
