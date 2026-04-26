import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

const RESOURCES = [
  { title: 'Renting a room in the UK — checklist', group: 'Housing', status: 'Published', updated: '3d ago' },
  { title: 'GP registration guide',                group: 'Health',  status: 'Draft',     updated: '5d ago' },
  { title: "Driver's licence change steps",        group: 'Legal',   status: 'Needs update', updated: '2w ago' },
  { title: 'National Insurance — step by step',    group: 'Legal',   status: 'Published', updated: '1w ago' },
];

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  template: `
    <div class="page-header">
      <h1>Library Manager</h1>
      <span class="page-subtitle">{{ resources.length }} knowledge cards</span>
      <button pButton label="New card" icon="pi pi-plus" class="p-button-sm ml-auto"></button>
    </div>

    <p-table [value]="resources" styleClass="p-datatable-sm p-datatable-striped">
      <ng-template pTemplate="header">
        <tr><th>Title</th><th>Group</th><th>Status</th><th>Updated</th><th></th></tr>
      </ng-template>
      <ng-template pTemplate="body" let-r>
        <tr>
          <td>{{ r.title }}</td>
          <td>{{ r.group }}</td>
          <td>
            <p-tag [value]="r.status"
              [severity]="r.status === 'Published' ? 'success' : r.status === 'Draft' ? 'secondary' : 'warn'" />
          </td>
          <td>{{ r.updated }}</td>
          <td>
            <button pButton icon="pi pi-pencil" class="p-button-text p-button-sm p-button-rounded"></button>
            <button pButton icon="pi pi-trash"  class="p-button-text p-button-sm p-button-rounded p-button-danger"></button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `
})
export class LibraryComponent {
  resources = RESOURCES;
}
