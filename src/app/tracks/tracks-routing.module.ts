import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackDetailComponent } from './track-detail/track-detail.component';
import { TrackHistoryComponent } from './track-history/track-history.component';


/**
 * The set of routes provided by the module, as well as any child routes. New nested routes should be added here.
 */
const tracksRoutes: Routes = [
  { path: '',  component: TrackHistoryComponent },
  { path: ':id', component: TrackDetailComponent }
];
/**
 * Separated routing module for the feature area.
 */
@NgModule({
  imports: [RouterModule.forChild(tracksRoutes)],
  exports: [RouterModule],
  providers: []
})
export class TracksRoutingModule { }


