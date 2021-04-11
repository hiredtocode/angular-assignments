import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-inactive-users',
  template: `<h3>Inactive Users</h3>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let user of users; let i = index">
        {{ user }} |
        <a href="#" (click)="onSetToActive(i)">Set to Active</a>
      </li>
    </ul> `,
})
export class InactiveUsersComponent implements OnInit {
  users?: string[];

  constructor(private statusService: StatusService) {}

  ngOnInit() {
    this.users = this.statusService.activeUsers;
  }

  onSetToActive(id: number) {
    this.statusService.setActive(id);
  }
}
