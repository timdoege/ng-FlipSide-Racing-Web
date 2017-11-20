import { FlipsideService } from './../../../flipside.service';
import { Router } from '@angular/router';
import { RaceEvent } from './../../../model/race-event.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-race-event-list-page',
  templateUrl: './race-event-list-page.component.html',
  styleUrls: ['./race-event-list-page.component.scss']
})
export class RaceEventListPageComponent implements OnInit {

  raceEvents: RaceEvent[];
  selectedRaceEvent: RaceEvent;
  isBusy = false;
  page = 0;
  pageSize = 25;

  constructor(private router: Router, private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.getRaceEvents();
  }
  getRaceEvents(): void {
    this.isBusy = true;
    this.flipsideService.getRaceEvents(this.pageSize, this.page, 0).then((rEvents) => {
      this.raceEvents = rEvents;
      this.isBusy = false;
    }).catch(err => {
      console.log('flipsideService.getRaceEvents: ', err);
    });
  }

  onNextPage(): void {
    this.page++;
    this.getRaceEvents();
  }
  onPreviousPage(rEvent: RaceEvent): void {
    this.page--;
    this.getRaceEvents();
  }

}
