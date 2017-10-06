import { MaterialModule } from '@angular/material';
import { RaceEventListPageComponent } from './race-event-list-page/race-event-list-page.component';
import { RaceEventListRoutingModule } from './race-event-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RaceEventListRoutingModule
  ],
  declarations: [RaceEventListPageComponent]
})
export class RaceEventListModule { }
