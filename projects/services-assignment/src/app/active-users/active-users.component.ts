import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-active-users',
  template: `<h3>Active Users</h3>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let user of users; let i = index">
        {{ user }} |
        <a href="#" (click)="onSetToInactive(i)">Set to Inactive</a>
      </li>
    </ul> `,
})
export class ActiveUsersComponent implements OnInit {
  users?: string[];

  constructor(private statusService: StatusService) {}

  ngOnInit() {
    this.users = this.statusService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.statusService.setInactive(id);
  }
}
