import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [StatisticsDashboardComponent],
  declarations: [StatisticsDashboardComponent]
})
export class StatisticsModule { }
