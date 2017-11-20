import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
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
  {
    path: 'tracks',
    loadChildren: './tracks/tracks.module#TracksModule'
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
