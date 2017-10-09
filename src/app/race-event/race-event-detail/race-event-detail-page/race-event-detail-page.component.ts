import { RaceEventSummary } from './../../../model/race-event-summary.model';
import { RaceEvent } from './../../../model/race-event.model';
import { FlipsideService } from './../../../flipside.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-race-event-detail-page',
  templateUrl: './race-event-detail-page.component.html',
  styleUrls: ['./race-event-detail-page.component.css']
})
export class RaceEventDetailPageComponent implements OnInit {
  eventId: number;
  raceEvent: RaceEventSummary[];
  // constructor(private location: Location, private flipsideService: FlipsideService) { }
  constructor(private location: Location, private route: ActivatedRoute, private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.eventId = Number(params.id);
        this.flipsideService.getRaceEvent(this.eventId).then(rEvent =>
          this.raceEvent = rEvent
        );
      });
  }

  goBack(): void {
    this.location.back();
  }
}
