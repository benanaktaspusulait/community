import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, CardModule, TagModule, TableModule, ButtonModule, ChartModule],
  template: `
    <section class="admin-hero">
      <div>
        <span class="eyebrow">Operations command center</span>
        <h1>Keep the community clean, useful, and moving.</h1>
        <p>
          Monitor migration health, approve sensitive actions, and protect topic discipline before the platform turns into another noisy chat group.
        </p>
      </div>

      <div class="hero-actions">
        <button pButton label="Review reports" icon="pi pi-flag" severity="danger" routerLink="/reports"></button>
        <button pButton label="Approval queue" icon="pi pi-check-circle" outlined routerLink="/approvals"></button>
      </div>
    </section>

    <div class="stat-grid">
      <article class="stat-card" *ngFor="let s of stats">
        <div class="stat-icon" [style.background]="s.bg">
          <i [class]="s.icon" [style.color]="s.color"></i>
        </div>
        <div class="stat-body">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
          <small>{{ s.detail }}</small>
        </div>
        <span class="stat-trend" [class.up]="s.trend > 0">
          <i [class]="s.trend > 0 ? 'pi pi-arrow-up' : 'pi pi-arrow-down'"></i>
          {{ s.trend }}%
        </span>
      </article>
    </div>

    <div class="ops-grid">
      <p-card styleClass="chart-card">
        <ng-template pTemplate="header">
          <div class="card-heading">
            <div>
              <h2>Community memory growth</h2>
              <span>Threads created vs solved, last 7 days</span>
            </div>
            <p-tag value="Healthy" severity="success" />
          </div>
        </ng-template>
        <p-chart type="bar" [data]="chartData" [options]="chartOptions" height="240" />
      </p-card>

      <p-card styleClass="queue-card">
        <ng-template pTemplate="header">
          <div class="card-heading">
            <div>
              <h2>Priority queue</h2>
              <span>Items that affect trust or migration momentum</span>
            </div>
          </div>
        </ng-template>

        <div class="priority-list">
          <a class="priority-item critical" routerLink="/reports">
            <i class="pi pi-flag"></i>
            <div>
              <strong>3 high-risk reports</strong>
              <span>Spam, harassment, and deposit scam reports need review.</span>
            </div>
            <b>12m SLA</b>
          </a>
          <a class="priority-item" routerLink="/approvals">
            <i class="pi pi-check-circle"></i>
            <div>
              <strong>7 pending approvals</strong>
              <span>Join requests, ads, and knowledge cards waiting.</span>
            </div>
            <b>4h SLA</b>
          </a>
          <a class="priority-item" routerLink="/library">
            <i class="pi pi-book"></i>
            <div>
              <strong>5 repeated questions</strong>
              <span>Promote answers into golden knowledge cards.</span>
            </div>
            <b>Curate</b>
          </a>
        </div>
      </p-card>
    </div>

    <div class="dashboard-grid">
      <p-card styleClass="reports-card">
        <ng-template pTemplate="header">
          <div class="card-heading">
            <div>
              <h2>Recent trust signals</h2>
              <span>Latest moderation and safety events</span>
            </div>
            <button pButton label="View all" icon="pi pi-arrow-right" iconPos="right" text routerLink="/reports"></button>
          </div>
        </ng-template>

        <p-table [value]="reports" [rows]="5" styleClass="p-datatable-sm professional-table">
          <ng-template pTemplate="header">
            <tr>
              <th>Signal</th>
              <th>Group</th>
              <th>Risk</th>
              <th>Age</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-r>
            <tr>
              <td>
                <strong>{{ r.reason }}</strong>
                <small>{{ r.target }}</small>
              </td>
              <td>{{ r.group }}</td>
              <td><p-tag [value]="r.risk" [severity]="r.risk === 'High' ? 'danger' : 'warn'" /></td>
              <td>{{ r.time }}</td>
            </tr>
          </ng-template>
        </p-table>
      </p-card>

      <p-card styleClass="checklist-card">
        <ng-template pTemplate="header">
          <div class="card-heading">
            <div>
              <h2>Migration checklist</h2>
              <span>Readiness to move a real group from WhatsApp/Facebook/Telegram</span>
            </div>
          </div>
        </ng-template>

        <div class="checklist">
          <div class="check-row complete">
            <i class="pi pi-check"></i>
            <span>Seeded housing and services knowledge cards</span>
          </div>
          <div class="check-row complete">
            <i class="pi pi-check"></i>
            <span>Invite links created for Housing and Health groups</span>
          </div>
          <div class="check-row active">
            <i class="pi pi-clock"></i>
            <span>Moderator coverage missing for weekend evenings</span>
          </div>
          <div class="check-row">
            <i class="pi pi-circle"></i>
            <span>Publish admin-pick digest before inviting wider members</span>
          </div>
        </div>
      </p-card>
    </div>
  `
})
export class DashboardComponent {
  stats = [
    { label: 'Active members', value: '1,240', detail: '312 invite-driven', icon: 'pi pi-users', color: '#2563eb', bg: '#dbeafe', trend: 12 },
    { label: 'Open reports', value: '3', detail: '2 high risk', icon: 'pi pi-flag', color: '#dc2626', bg: '#fee2e2', trend: -1 },
    { label: 'Pending approvals', value: '7', detail: '4 join, 2 ads, 1 card', icon: 'pi pi-check-circle', color: '#d97706', bg: '#fef3c7', trend: 5 },
    { label: 'Solved content', value: '72%', detail: 'answer rate this week', icon: 'pi pi-sparkles', color: '#059669', bg: '#d1fae5', trend: 8 },
  ];

  reports = [
    { reason: 'Deposit scam', target: 'Room listing by Unknown', group: 'Housing', risk: 'High', time: '20m' },
    { reason: 'Harassment', target: 'Direct reply to member', group: 'Health', risk: 'High', time: '5h' },
    { reason: 'Off-topic drift', target: 'Travel question in Legal', group: 'Legal', risk: 'Low', time: '2h' },
  ];

  chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'New threads',
        data: [12, 19, 8, 15, 22, 10, 14],
        backgroundColor: '#2563eb',
        borderRadius: 8,
      },
      {
        label: 'Solved',
        data: [8, 14, 5, 11, 18, 7, 10],
        backgroundColor: '#10b981',
        borderRadius: 8,
      }
    ]
  };

  chartOptions = {
    plugins: { legend: { position: 'bottom' } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#eef2f7' } }
    }
  };
}
