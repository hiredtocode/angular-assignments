import { Injectable } from '@angular/core';
import { CounterService as CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private counterService: CounterService) {}

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementActiveCounter();
  }

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementInactiveCounter();
  }
}
