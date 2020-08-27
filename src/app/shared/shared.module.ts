import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    CardComponent,
    SpinnerComponent,
    PaginationComponent,
    DividerComponent,
    CoverComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    CardComponent,
    SpinnerComponent,
    PaginationComponent,
    DividerComponent,
    CoverComponent,
    MatButtonModule,
    MatIconModule
  ],
})
export class SharedModule {}
