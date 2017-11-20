import { CommonMaterialModule } from './../common-material/common-material.module';
import { RacersRoutingModule } from './racers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacersListComponent } from './racers-list/racers-list.component';
import { RacersDetailComponent } from './racers-detail/racers-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    RacersRoutingModule
  ],
  declarations: [RacersListComponent, RacersDetailComponent]
})
export class RacersModule { }
