import { LapFactory } from './factory/lap.factory';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonMaterialModule } from './common-material/common-material.module';
import { RaceEventSummaryFactory } from './factory/race-event-summary.factory';
import { RaceEventFactory } from './factory/race-event.factory';
import { RacerFactory } from './factory/racer.factory';
import { TrackFactory } from './factory/track.factory';
import { FlipsideService } from './flipside.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    AppRoutingModule
  ],
  providers: [FlipsideService, RaceEventFactory, RaceEventSummaryFactory, RacerFactory,
    TrackFactory, LapFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
