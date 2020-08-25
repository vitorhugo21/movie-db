import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheMovieDbResponse } from '../interfaces/the-movie-db-response.interface';
import { SearchMoviesService } from '../services/search-movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['../../assets/scss/main.scss'],
})
export class SearchMovieComponent implements OnInit {
  searchMovies: TheMovieDbResponse;
  showMovies = false;
  querySearch = '';
  title = '';

  constructor(
    private route: ActivatedRoute,
    private searchMoviesService: SearchMoviesService
  ) {}

  ngOnInit(): void {
    this.buildPage();
  }

  buildPage(pageNumber: number = 1): void {
    this.route.params.subscribe((params: { movie: string }) => {
      this.title = params.movie;
      this.getMovies(params.movie);
    });
  }

  getMovies(query: string, pageNumber: number = 1): void {
    this.showMovies = false;
    this.querySearch = query.replace(' ', '+');

    this.searchMoviesService
      .getMovies(this.querySearch, pageNumber)
      .subscribe((response: TheMovieDbResponse) => {
        this.searchMovies = response;
        setTimeout(() => {
          this.showMovies = true;
        }, 1500);
      });
  }

  changePage(newPageNumber: number): void {
    this.getMovies(this.querySearch, newPageNumber);
  }
}
