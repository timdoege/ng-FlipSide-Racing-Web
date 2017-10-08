import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  declarations: [StatisticsPageComponent]
})
export class StatisticsModule { }
