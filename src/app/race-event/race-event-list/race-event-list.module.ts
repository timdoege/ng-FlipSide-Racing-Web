import { CommonMaterialModule } from './../../common-material/common-material.module';
import { RaceEventListPageComponent } from './race-event-list-page/race-event-list-page.component';
import { RaceEventListRoutingModule } from './race-event-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    RaceEventListRoutingModule
  ],
  declarations: [RaceEventListPageComponent]
})
export class RaceEventListModule { }
