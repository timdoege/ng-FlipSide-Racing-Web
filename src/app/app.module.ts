import { RaceEventSummaryFactory } from './factory/race-event-summary.factory';
import { CommonMaterialModule } from './common-material/common-material.module';
import { RaceEventFactory } from './factory/race-event.factory';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlipsideService } from './flipside.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    AppRoutingModule
  ],
  providers: [FlipsideService, RaceEventFactory, RaceEventSummaryFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
