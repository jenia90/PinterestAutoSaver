import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatListModule,
  MatButtonModule, MatPaginatorModule,
  MatSidenavModule, MatToolbarModule,
  MatIconModule, MatTreeModule, MatCheckboxModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatTreeModule
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatTreeModule
  ]
})
export class MaterialModule { }
