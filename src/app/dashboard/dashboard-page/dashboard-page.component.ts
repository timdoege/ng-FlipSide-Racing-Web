import { Component, OnInit } from '@angular/core';

import { FlipsideService } from '../../flipside.service';
import { Racer } from '../../model/racer.model';
import { RaceEvent } from '../../model/race-event.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  raceEvents: RaceEvent[];
  racerLaps: Racer[];
  isBusy = false;

  constructor(private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.getRacerLaps();
    this.getLatestRaceEvents();
  }

  getLatestRaceEvents(): void {
    this.isBusy = true;
    this.flipsideService.getRaceEvents(5, 0, 0).then((rEvents) => {
      this.raceEvents = rEvents;
      this.isBusy = false;
    }
    );
  }

  getRacerLaps(): void {
    this.isBusy = true;
    this.flipsideService.getRacerLaps().then((racers) => {
      this.racerLaps = racers;
      this.isBusy = false;
    }
    );
  }

}
