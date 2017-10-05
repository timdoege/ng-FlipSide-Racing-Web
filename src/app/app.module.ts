import { RaceEventFactory } from './factory/race-event.factory';
import { AppRoutingModule } from './app-routing.module';
import { StatisticsModule } from './statistics/statistics.module';
import { RaceEventModule } from './race-event/race-event.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlipsideService } from './flipside.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RaceEventModule,
    StatisticsModule,
    AppRoutingModule
  ],
  providers: [FlipsideService, RaceEventFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
