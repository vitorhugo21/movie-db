import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SearchMovieRoutingModule } from './search-movie-routing.module';
import { SearchMovieComponent } from './search-movie.component';

@NgModule({
  declarations: [SearchMovieComponent],
  imports: [CommonModule, SearchMovieRoutingModule, SharedModule],
})
export class SearchMovieModule {}
