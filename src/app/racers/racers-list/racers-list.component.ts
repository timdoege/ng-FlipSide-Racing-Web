import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { FlipsideService } from '../../flipside.service';
import { Racer } from './../../model/racer.model';

@Component({
  selector: 'app-racers-list',
  templateUrl: './racers-list.component.html',
  styleUrls: ['./racers-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RacersListComponent implements OnInit {

  racers: Racer[];

  constructor(private router: Router, private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.getRaceEvents();
  }
  getRaceEvents(): void {
    this.flipsideService.getRacers().then((racers) => {
      this.racers = racers;
    }
    );
  }

}
