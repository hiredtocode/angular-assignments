import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  activeCounter: number = 0;
  inactiveCounter: number = 0;

  incrementActiveCounter() {
    this.activeCounter++;
    console.log(`active counter: ${this.activeCounter}`);
  }
  incrementInactiveCounter() {
    this.inactiveCounter++;
    console.log(`active counter: ${this.inactiveCounter}`);
  }
}
