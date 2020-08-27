import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { SharedModule } from '../shared/shared.module';
import { TrailerDialogComponent } from './trailer-dialog/trailer-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [MovieComponent, TrailerDialogComponent, SafePipe],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
    MatDialogModule
  ],
  entryComponents: [TrailerDialogComponent]
})
export class MovieModule { }
