import { StatisticsDashboardRoutingModule } from './statistics-dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsDashboardPageComponent } from './statistics-dashboard-page/statistics-dashboard-page.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsDashboardRoutingModule
  ],
  declarations: [StatisticsDashboardPageComponent]
})
export class StatisticsDashboardModule { }
