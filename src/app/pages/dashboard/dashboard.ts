import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  activities = [
    {
      title: 'New user registered',
      description: 'John Doe created an account.',
      time: '5 minutes ago'
    },
    {
      title: 'Payment received',
      description: 'Invoice #1024 was paid successfully.',
      time: '1 hour ago'
    },
    {
      title: 'Profile updated',
      description: 'Your profile information was updated.',
      time: 'Yesterday'
    }
  ];

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}