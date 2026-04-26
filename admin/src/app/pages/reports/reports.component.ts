import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

const REPORTS = [
  {
    reason: 'Deposit scam',
    target: 'Room listing by Unknown',
    preview: 'Send GBP 50 deposit today to secure the room.',
    group: 'Housing',
    risk: 'High',
    status: 'Open',
    reports: 5,
    owner: 'Unknown user',
    time: '20m ago',
    recommended: 'Remove post + viewer mode 7 days',
  },
  {
    reason: 'Harassment',
    target: 'Reply by Kemal B.',
    preview: 'Stop messaging me or I will find you.',
    group: 'Health',
    risk: 'High',
    status: 'Open',
    reports: 2,
    owner: 'Kemal B.',
    time: '5h ago',
    recommended: 'Escalate + restrict in Health',
  },
  {
    reason: 'Off-topic',
    target: 'Post by Sara L.',
    preview: 'Anyone want to go to the cinema this weekend?',
    group: 'Legal',
    risk: 'Low',
    status: 'Open',
    reports: 1,
    owner: 'Sara L.',
    time: '2h ago',
    recommended: 'Move or dismiss',
  },
  {
    reason: 'Spam',
    target: 'Post by Mehmet D.',
    preview: 'Buy cheap followers here, click this link.',
    group: 'Housing',
    risk: 'High',
    status: 'Resolved',
    reports: 3,
    owner: 'Mehmet D.',
    time: '1d ago',
    recommended: 'Resolved by warning',
  },
];

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, RouterLink, TableModule, TagModule, ButtonModule],
  template: `
    <div class="page-header elevated">
      <div>
        <span class="eyebrow">Trust & safety</span>
        <h1>Reports Queue</h1>
        <span class="page-subtitle">{{ open }} open reports, {{ highRisk }} high risk</span>
      </div>
      <button pButton label="Moderation policy" icon="pi pi-shield" outlined></button>
    </div>

    <div class="triage-strip">
      <article class="triage-card danger">
        <span>High risk</span>
        <strong>{{ highRisk }}</strong>
        <small>Review first</small>
      </article>
      <article class="triage-card warn">
        <span>Viewer-mode candidates</span>
        <strong>2</strong>
        <small>Group-scoped only</small>
      </article>
      <article class="triage-card">
        <span>Median response</span>
        <strong>18m</strong>
        <small>Target under 2h</small>
      </article>
    </div>

    <p-table [value]="reports" styleClass="p-datatable-sm professional-table">
      <ng-template pTemplate="header">
        <tr>
          <th>Report</th>
          <th>Scope</th>
          <th>Risk</th>
          <th>Status</th>
          <th>Recommended action</th>
          <th></th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-r>
        <tr>
          <td>
            <strong>{{ r.reason }}</strong>
            <small>{{ r.target }}</small>
            <em>{{ r.preview }}</em>
          </td>
          <td>
            <strong>{{ r.group }}</strong>
            <small>{{ r.reports }} report{{ r.reports > 1 ? 's' : '' }} · {{ r.time }}</small>
          </td>
          <td><p-tag [value]="r.risk" [severity]="r.risk === 'High' ? 'danger' : 'warn'" /></td>
          <td><p-tag [value]="r.status" [severity]="r.status === 'Open' ? 'warn' : 'success'" /></td>
          <td class="decision-cell">{{ r.recommended }}</td>
          <td>
            <div class="action-btns">
              <button pButton label="Review" icon="pi pi-eye" class="p-button-sm" [routerLink]="['/members']"></button>
              <button pButton label="Resolve" icon="pi pi-check" class="p-button-sm p-button-outlined" *ngIf="r.status === 'Open'"></button>
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>

    <div class="policy-note">
      <i class="pi pi-info-circle"></i>
      <span>Viewer mode and removals are applied to the selected group only. Platform/community suspension remains a separate escalation path.</span>
    </div>
  `
})
export class ReportsComponent {
  reports = REPORTS;

  get open() {
    return this.reports.filter(r => r.status === 'Open').length;
  }

  get highRisk() {
    return this.reports.filter(r => r.status === 'Open' && r.risk === 'High').length;
  }
}
