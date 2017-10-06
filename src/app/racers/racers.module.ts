import { MaterialModule } from '@angular/material';
import { RacersRoutingModule } from './racers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacersPageComponent } from './racers-page/racers-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RacersRoutingModule
  ],
  declarations: [RacersPageComponent]
})
export class RacersModule { }
