import { MaterialModule } from '@angular/material';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StatisticsRoutingModule
  ],
  declarations: [StatisticsPageComponent]
})
export class StatisticsModule { }
