import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { FlipsideService } from '../../flipside.service';
import { Track } from '../../model/track.model';

@Component({
  selector: 'app-track-history',
  templateUrl: './track-history.component.html',
  styleUrls: ['./track-history.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrackHistoryComponent implements OnInit {


  tracks: Track[];

  constructor(private router: Router, private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.getRaceEvents();
  }
  getRaceEvents(): void {
    this.flipsideService.getTracks().then((tracks) => {
      this.tracks = tracks;
    }
    );
  }


}
