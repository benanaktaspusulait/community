import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, TableModule, ButtonModule, ChartModule],
  template: `
    <div class="page-header">
      <h1>Dashboard</h1>
      <span class="page-subtitle">Community health overview</span>
    </div>

    <!-- stat cards -->
    <div class="stat-grid">
      <div class="stat-card" *ngFor="let s of stats">
        <div class="stat-icon" [style.background]="s.bg">
          <i [class]="s.icon" [style.color]="s.color"></i>
        </div>
        <div class="stat-body">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
        <span class="stat-trend" [class.up]="s.trend > 0">
          <i [class]="s.trend > 0 ? 'pi pi-arrow-up' : 'pi pi-arrow-down'"></i>
          {{ s.trend }}%
        </span>
      </div>
    </div>

    <div class="dashboard-grid">
      <!-- chart -->
      <p-card header="Activity (last 7 days)" styleClass="chart-card">
        <p-chart type="bar" [data]="chartData" [options]="chartOptions" height="220" />
      </p-card>

      <!-- recent reports -->
      <p-card header="Recent Reports" styleClass="reports-card">
        <p-table [value]="reports" [rows]="5" styleClass="p-datatable-sm">
          <ng-template pTemplate="body" let-r>
            <tr>
              <td>{{ r.reason }}</td>
              <td>{{ r.group }}</td>
              <td><p-tag [value]="r.risk" [severity]="r.risk === 'High' ? 'danger' : 'warn'" /></td>
              <td>{{ r.time }}</td>
            </tr>
          </ng-template>
        </p-table>
        <div class="card-footer">
          <button pButton label="View all" icon="pi pi-arrow-right" iconPos="right" class="p-button-text p-button-sm" routerLink="/reports"></button>
        </div>
      </p-card>
    </div>
  `
})
export class DashboardComponent {
  stats = [
    { label: 'Members',       value: '1,240', icon: 'pi pi-users',        color: '#4f6ef7', bg: '#e0eaff', trend: 12 },
    { label: 'Open Reports',  value: '3',     icon: 'pi pi-flag',         color: '#ef4444', bg: '#fee2e2', trend: -1 },
    { label: 'Pending Approvals', value: '7', icon: 'pi pi-check-circle', color: '#f59e0b', bg: '#fef3c7', trend: 5 },
    { label: 'Library Items', value: '128',   icon: 'pi pi-book',         color: '#10b981', bg: '#d1fae5', trend: 8 },
  ];

  reports = [
    { reason: 'Spam',       group: 'Housing', risk: 'High', time: '20m ago' },
    { reason: 'Off-topic',  group: 'Legal',   risk: 'Low',  time: '2h ago' },
    { reason: 'Harassment', group: 'Health',  risk: 'High', time: '5h ago' },
  ];

  chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'New threads',
      data: [12, 19, 8, 15, 22, 10, 14],
      backgroundColor: '#4f6ef7',
      borderRadius: 6,
    }, {
      label: 'Solved',
      data: [8, 14, 5, 11, 18, 7, 10],
      backgroundColor: '#10b981',
      borderRadius: 6,
    }]
  };

  chartOptions = {
    plugins: { legend: { position: 'bottom' } },
    scales: { x: { grid: { display: false } }, y: { grid: { color: '#f0f0f0' } } }
  };
}
