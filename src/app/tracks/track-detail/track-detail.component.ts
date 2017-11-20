import { Lap } from './../../model/lap.model';
import { Location } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlipsideService } from '../../flipside.service';
import { Track } from '../../model/track.model';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrackDetailComponent implements OnInit {

  trackId: number;
  track: Track;
  bestLaps: Lap[];

  constructor(private location: Location, private route: ActivatedRoute,
    private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.trackId = Number(params.id);
      this.flipsideService.getTrack(this.trackId).then(track => {
        this.track = track;
        this.flipsideService.getBestLapsForTrack(this.trackId).then(laps =>
          this.bestLaps = laps
        ).catch(err => {
          console.log(err);
        });
      }
      ).catch(err => {
        console.log(err);
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
