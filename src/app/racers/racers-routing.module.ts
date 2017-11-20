import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RacersDetailComponent } from './racers-detail/racers-detail.component';
import { RacersListComponent } from './racers-list/racers-list.component';

/**
 * The set of routes provided by the module, as well as any child routes. New nested routes should be added here.
 */
const racersRoutes: Routes = [
  { path: '',  component: RacersListComponent },
  { path: ':id', component: RacersDetailComponent }
];
/**
 * Separated routing module for the feature area.
 */
@NgModule({
  imports: [RouterModule.forChild(racersRoutes)],
  exports: [RouterModule],
  providers: []
})
export class RacersRoutingModule { }


