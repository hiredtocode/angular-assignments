import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  message = '';

  onClicked(event: string) {
    console.log(event);
    this.message = event;
  }

  constructor() {}

  ngOnInit(): void {}
}
