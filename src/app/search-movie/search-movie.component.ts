import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheMovieDbResponse } from '../interfaces/the-movie-db-response.interface';
import { SearchMoviesService } from '../services/search-movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private searchMoviesService: SearchMoviesService
  ) {}

  ngOnInit(): void {
    this.buildPage();
  }

  buildPage(pageNumber: number = 1): void {
    this.route.params.subscribe((params: { movie: string }) => {
      this.getMovies(params.movie);
    });
  }

  getMovies(query: string): void {
    const formatedQuery = query.replace(' ', '+');

    this.searchMoviesService
      .getMovies(formatedQuery)
      .subscribe((response: TheMovieDbResponse) => console.log(response));
  }
}
