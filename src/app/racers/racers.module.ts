import { CommonMaterialModule } from './../common-material/common-material.module';
import { RacersRoutingModule } from './racers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacersPageComponent } from './racers-page/racers-page.component';

@NgModule({
  imports: [
    CommonModule,
    CommonMaterialModule,
    RacersRoutingModule
  ],
  declarations: [RacersPageComponent]
})
export class RacersModule { }
