import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CommonMaterialModule } from '../common-material/common-material.module';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardModule { }
