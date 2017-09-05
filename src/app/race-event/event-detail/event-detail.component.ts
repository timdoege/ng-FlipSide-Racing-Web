import { FlipsideService } from './../../flipside.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor(
    private flipsideService: FlipsideService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
