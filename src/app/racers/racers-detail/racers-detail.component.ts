import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FlipsideService } from '../../flipside.service';
import { Racer } from './../../model/racer.model';

@Component({
  selector: 'app-racers-detail',
  templateUrl: './racers-detail.component.html',
  styleUrls: ['./racers-detail.component.scss'],
})
export class RacersDetailComponent implements OnInit {

  racerId: number;
  racer: Racer;
  constructor(private location: Location, private route: ActivatedRoute,
    private flipsideService: FlipsideService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.racerId = Number(params.id);
        this.flipsideService.getRacer(this.racerId).then(racer =>
          this.racer = racer
        ).catch(err => {
          console.log(err);
        });
      });
  }

  goBack(): void {
    this.location.back();
  }
}
