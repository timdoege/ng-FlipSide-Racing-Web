import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * The set of routes provided by the module, as well as any child routes. New nested routes should be added here.
 */
export const routes: Routes = [
  {
    path: '',
    component: StatisticsPageComponent, children: [
      {
        path: '',
        loadChildren: './statistics-dashboard/statistics-dashboard.module#StatisticsDashboardModule'
      },
      {
        path: 'racer',
        loadChildren: './statistics-racer/statistics-racer.module#StatisticsRacerModule'
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
export class StatisticsRoutingModule { }
