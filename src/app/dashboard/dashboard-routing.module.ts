import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * The set of routes provided by the module, as well as any child routes. New nested routes should be added here.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardPageComponent
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
export class DashboardRoutingModule { }

