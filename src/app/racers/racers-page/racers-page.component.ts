import { FlipsideService } from './../../flipside.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-racers-page',
  templateUrl: './racers-page.component.html',
  styleUrls: ['./racers-page.component.css']
})
export class RacersPageComponent implements OnInit {

  constructor(private location: Location, private flipsideService: FlipsideService) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
