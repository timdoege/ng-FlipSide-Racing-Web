import { AppRoutingModule } from './../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports:      [ EventListComponent, EventDetailComponent ],
  declarations: [EventListComponent, EventDetailComponent]
})
export class RaceEventModule { }
