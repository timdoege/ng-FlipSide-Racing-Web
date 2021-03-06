import { RaceEventPageComponent } from './race-event-page/race-event-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * The set of routes provided by the module, as well as any child routes. New nested routes should be added here.
 */
export const routes: Routes = [
  {
    path: '',
    component: RaceEventPageComponent, children: [
      {
        path: '',
        loadChildren: './race-event-list/race-event-list.module#RaceEventListModule'
      },
      {
        path: ':id',
        loadChildren: './race-event-detail/race-event-detail.module#RaceEventDetailModule'
      }
    ]
  }
];

/**
 * Separated routing module for the feature area.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RaceEventRoutingModule { }
