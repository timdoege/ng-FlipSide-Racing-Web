import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommonMaterialModule } from '../common-material/common-material.module';
import { TrackDetailComponent } from './track-detail/track-detail.component';
import { TrackHistoryComponent } from './track-history/track-history.component';
import { TracksRoutingModule } from './tracks-routing.module';
import { TrackEditComponent } from './track-edit/track-edit.component';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    TracksRoutingModule
  ],
  declarations: [TrackHistoryComponent, TrackDetailComponent, TrackEditComponent]
})
export class TracksModule { }
