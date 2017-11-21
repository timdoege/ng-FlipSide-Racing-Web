import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
  MatIconModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatGridListModule} from '@angular/material';

@NgModule({
  imports: [CommonModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
    MatIconModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatGridListModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
    MatIconModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule, MatGridListModule
  ],
  declarations: []
})
export class CommonMaterialModule { }
