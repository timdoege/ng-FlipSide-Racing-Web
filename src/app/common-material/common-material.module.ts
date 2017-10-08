import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
  MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [CommonModule,
    MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
    MatIconModule, MatMenuModule, MatToolbarModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
    MatIconModule, MatMenuModule, MatToolbarModule
  ],
  declarations: []
})
export class CommonMaterialModule { }
