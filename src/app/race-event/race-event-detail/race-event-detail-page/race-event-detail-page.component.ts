import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-race-event-detail-page',
  templateUrl: './race-event-detail-page.component.html',
  styleUrls: ['./race-event-detail-page.component.css']
})
export class RaceEventDetailPageComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
