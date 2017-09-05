import { FlipsideService } from './../flipside.service';
import { RaceEvent } from './../model/race-event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  raceEvents: RaceEvent[];

  constructor(private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.flipsideService.getRaceEvents().then(rEvents => this.raceEvents = rEvents.slice(1, 5));
  }
  getRaceEvents(): void {
    this.flipsideService.getRaceEvents().then(rEvents => this.raceEvents = rEvents);
  }
}
