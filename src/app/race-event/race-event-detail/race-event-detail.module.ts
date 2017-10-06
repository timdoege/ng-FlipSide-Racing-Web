import { MaterialModule } from '@angular/material';
import { RaceEventDetailRoutingModule } from './race-event-detail-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceEventDetailPageComponent } from './race-event-detail-page/race-event-detail-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RaceEventDetailRoutingModule
  ],
  declarations: [RaceEventDetailPageComponent]
})
export class RaceEventDetailModule { }
