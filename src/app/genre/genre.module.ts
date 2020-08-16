import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';

@NgModule({
  declarations: [GenreComponent],
  imports: [CommonModule, GenreRoutingModule, SharedModule],
})
export class GenreModule {}
