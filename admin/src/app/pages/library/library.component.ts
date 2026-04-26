import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

const RESOURCES = [
  {
    title: 'Renting a room in the UK - checklist',
    group: 'Housing',
    status: 'Published',
    updated: '3d ago',
    sources: 4,
    saves: 128,
    owner: 'Ayse Kaya',
  },
  {
    title: 'GP registration guide',
    group: 'Health',
    status: 'Draft',
    updated: '5d ago',
    sources: 3,
    saves: 41,
    owner: 'Health mod',
  },
  {
    title: "Driver's licence change steps",
    group: 'Legal',
    status: 'Needs update',
    updated: '2w ago',
    sources: 5,
    saves: 96,
    owner: 'Ali Yilmaz',
  },
  {
    title: 'National Insurance - step by step',
    group: 'Legal',
    status: 'Published',
    updated: '1w ago',
    sources: 2,
    saves: 203,
    owner: 'Aylin Admin',
  },
];

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ButtonModule],
  template: `
    <div class="page-header elevated">
      <div>
        <span class="eyebrow">Community memory</span>
        <h1>Library Manager</h1>
        <span class="page-subtitle">{{ resources.length }} knowledge cards, FAQs, guides, and reusable answers</span>
      </div>
      <div class="header-actions">
        <button pButton label="Admin picks" icon="pi pi-star" outlined></button>
        <button pButton label="New card" icon="pi pi-plus"></button>
      </div>
    </div>

    <div class="library-command">
      <article>
        <span>Repeated questions detected</span>
        <strong>5</strong>
        <small>Convert to golden knowledge this week</small>
      </article>
      <article>
        <span>Cards needing update</span>
        <strong>1</strong>
        <small>Driving licence guide is aging</small>
      </article>
      <article>
        <span>Search exits avoided</span>
        <strong>72%</strong>
        <small>Users found answers without posting</small>
      </article>
    </div>

    <p-table [value]="resources" styleClass="p-datatable-sm professional-table">
      <ng-template pTemplate="header">
        <tr>
          <th>Knowledge card</th>
          <th>Group</th>
          <th>Status</th>
          <th>Signals</th>
          <th>Owner</th>
          <th></th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-r>
        <tr>
          <td>
            <strong>{{ r.title }}</strong>
            <small>Updated {{ r.updated }}</small>
          </td>
          <td>{{ r.group }}</td>
          <td><p-tag [value]="r.status" [severity]="statusSeverity(r.status)" /></td>
          <td>
            <div class="signal-stack">
              <span>{{ r.sources }} source threads</span>
              <span>{{ r.saves }} saves</span>
            </div>
          </td>
          <td>{{ r.owner }}</td>
          <td>
            <div class="action-btns">
              <button pButton icon="pi pi-pencil" label="Edit" class="p-button-sm p-button-outlined"></button>
              <button pButton icon="pi pi-send" label="Publish" class="p-button-sm" *ngIf="r.status !== 'Published'"></button>
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `
})
export class LibraryComponent {
  resources = RESOURCES;

  statusSeverity(status: string) {
    if (status === 'Published') return 'success';
    if (status === 'Needs update') return 'warn';
    return 'secondary';
  }
}
