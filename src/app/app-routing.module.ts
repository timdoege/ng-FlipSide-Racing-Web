import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'events',
    loadChildren: './race-event/race-event.module#RaceEventModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'statistics',
    loadChildren: './statistics/statistics.module#StatisticsModule'
  },
  {
    path: 'racers',
    loadChildren: './racers/racers.module#RacersModule'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
