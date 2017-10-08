import { StatisticsRacerRoutingModule } from './statistics-racer-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsRacerPageComponent } from './statistics-racer-page/statistics-racer-page.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRacerRoutingModule
  ],
  declarations: [StatisticsRacerPageComponent]
})
export class StatisticsRacerModule { }
