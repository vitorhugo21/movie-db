import { Component, OnInit } from '@angular/core';
import { TheMovieDbResponse } from '../interfaces/the-movie-db-response.interface';
import { TopRatedService } from '../services/top-rated.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['../../assets/scss/main.scss'],
})
export class TopRatedComponent implements OnInit {
  topRatedMovies: TheMovieDbResponse;
  showMovies = false;

  constructor(private topRatedServices: TopRatedService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(pageNumber: number = 1): void {
    this.showMovies = false;
    this.topRatedServices
      .getMovies(pageNumber)
      .subscribe((response: TheMovieDbResponse) => {
        this.topRatedMovies = response;
        setTimeout(() => {
          this.showMovies = true;
        }, 1500);
      });
  }

  changePage(newPageNumber: number): void {
    this.getMovies(newPageNumber);
  }
}
