import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule],
  template: `
    <main class="login-page">
      <section class="login-brand-panel">
        <div class="login-logo">
          <i class="pi pi-shield"></i>
          <span>Community Admin</span>
        </div>

        <div class="login-copy">
          <span class="eyebrow">Operational control layer</span>
          <h1>Run trusted communities without becoming another noisy group admin.</h1>
          <p>
            Review joins, reports, ads, resources, special-day groups, and member penalties from one focused console.
          </p>
        </div>

        <div class="login-proof-grid">
          <article>
            <strong>10</strong>
            <span>open queue items</span>
          </article>
          <article>
            <strong>18m</strong>
            <span>median report response</span>
          </article>
          <article>
            <strong>72%</strong>
            <span>searches solved without posting</span>
          </article>
        </div>
      </section>

      <section class="login-card">
        <div>
          <span class="eyebrow">Secure sign in</span>
          <h2>Welcome back, admin.</h2>
          <p>Use your admin identity to access the selected community scope.</p>
        </div>

        <label class="login-field">
          <span>Email</span>
          <input type="email" value="admin@community.local" aria-label="Email" />
        </label>

        <label class="login-field">
          <span>Password</span>
          <div class="password-row">
            <input [type]="showPassword() ? 'text' : 'password'" value="community-admin" aria-label="Password" />
            <button type="button" (click)="showPassword.set(!showPassword())" [attr.aria-label]="showPassword() ? 'Hide password' : 'Show password'">
              <i [class]="showPassword() ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
            </button>
          </div>
        </label>

        <div class="login-meta-row">
          <label>
            <input type="checkbox" checked />
            <span>Remember this device</span>
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button pButton routerLink="/dashboard" class="login-submit" label="Sign in to console" icon="pi pi-arrow-right" iconPos="right"></button>

        <div class="login-security-note">
          <i class="pi pi-lock"></i>
          <span>Prototype login. Production should use SSO/MFA and scoped admin permissions.</span>
        </div>
      </section>
    </main>
  `
})
export class LoginComponent {
  showPassword = signal(false);
}
