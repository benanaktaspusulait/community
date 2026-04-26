import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

const ITEMS = [
  { type: 'JOIN',     label: 'Fatma K. wants to join',         meta: 'MK Community • 2h ago',  status: 'Pending' },
  { type: 'AD',       label: 'Ad: "Accountant services MK"',   meta: 'Housing • 3h ago',        status: 'Pending' },
  { type: 'RESOURCE', label: 'Resource: "GP registration"',    meta: 'Health • 1d ago',         status: 'Pending' },
  { type: 'JOIN',     label: 'Mehmet D. wants to join',        meta: 'MK Community • 1d ago',   status: 'Approved' },
];

@Component({
  selector: 'app-approvals',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  template: `
    <div class="page-header">
      <h1>Approval Queue</h1>
      <span class="page-subtitle">{{ pending }} pending items</span>
    </div>

    <p-table [value]="items" styleClass="p-datatable-sm p-datatable-striped">
      <ng-template pTemplate="header">
        <tr><th>Type</th><th>Item</th><th>Meta</th><th>Status</th><th></th></tr>
      </ng-template>
      <ng-template pTemplate="body" let-item>
        <tr>
          <td><p-tag [value]="item.type" severity="info" /></td>
          <td>{{ item.label }}</td>
          <td class="text-muted">{{ item.meta }}</td>
          <td><p-tag [value]="item.status" [severity]="item.status === 'Pending' ? 'warn' : 'success'" /></td>
          <td>
            <div class="action-btns" *ngIf="item.status === 'Pending'">
              <button pButton label="Approve" icon="pi pi-check" class="p-button-sm p-button-success"></button>
              <button pButton label="Reject"  icon="pi pi-times" class="p-button-sm p-button-danger p-button-outlined"></button>
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `
})
export class ApprovalsComponent {
  items = ITEMS;
  get pending() { return this.items.filter(i => i.status === 'Pending').length; }
}
