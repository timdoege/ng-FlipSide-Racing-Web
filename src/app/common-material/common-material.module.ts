import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
  MatIconModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [CommonModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
    MatIconModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
    MatIconModule, MatMenuModule, MatToolbarModule, MatProgressSpinnerModule
  ],
  declarations: []
})
export class CommonMaterialModule { }
