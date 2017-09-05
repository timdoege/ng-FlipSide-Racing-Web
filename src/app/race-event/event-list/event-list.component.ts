import { RaceEvent } from './../../model/race-event.model';
import { FlipsideService } from '../../flipside.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  raceEvents: RaceEvent[];
  selectedRaceEvent: RaceEvent;

  constructor(private router: Router, private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.getRaceEvents();
  }
  getRaceEvents(): void {
    this.flipsideService.getRaceEvents().then(rEvents => this.raceEvents = rEvents);
  }

  onSelect(rEvent: RaceEvent): void {
    console.log('User selected ', rEvent);
    this.selectedRaceEvent = rEvent;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedRaceEvent.id]);
  }
}
