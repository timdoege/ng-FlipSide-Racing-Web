import { FlipsideService } from './../../../flipside.service';
import { Router } from '@angular/router';
import { RaceEvent } from './../../../model/race-event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-event-list-page',
  templateUrl: './race-event-list-page.component.html',
  styleUrls: ['./race-event-list-page.component.css']
})
export class RaceEventListPageComponent implements OnInit {

  raceEvents: RaceEvent[];
  selectedRaceEvent: RaceEvent;
  isBusy = false;

  constructor(private router: Router, private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.getRaceEvents();
  }
  getRaceEvents(): void {
    this.isBusy = true;
    this.flipsideService.getRaceEvents(50, 0, 0).then((rEvents) => {
      this.raceEvents = rEvents;
      this.isBusy = false;
    }
    );
  }

  onSelect(rEvent: RaceEvent): void {
    console.log('User selected ', rEvent);
    this.selectedRaceEvent = rEvent;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedRaceEvent.id]);
  }
}
