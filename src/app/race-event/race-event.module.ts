import { RaceEventRoutingModule } from './race-event-routing.module';
import { RaceEventPageComponent } from './race-event-page/race-event-page.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RaceEventRoutingModule
  ],
  declarations: [RaceEventPageComponent]
})
export class RaceEventModule { }
