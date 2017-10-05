import { StatisticsDashboardComponent } from './statistics/statistics-dashboard/statistics-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventListComponent } from './race-event/event-list/event-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'statistics', component: StatisticsDashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
