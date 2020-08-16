import { Component, OnInit } from '@angular/core';
import { TheMovieDbResponse } from '../interfaces/the-movie-db-response.interface';
import { PopularService } from '../services/popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['../../assets/scss/main.scss'],
})
export class PopularComponent implements OnInit {
  popularMovies: TheMovieDbResponse;
  showMovies = false;

  constructor(private popularServices: PopularService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(pageNumber: number = 1): void {
    this.showMovies = false;
    this.popularServices
      .getMovies(pageNumber)
      .subscribe((response: TheMovieDbResponse) => {
        this.popularMovies = response;
        setTimeout(() => {
          this.showMovies = true;
        }, 1500);
      });
  }

  changePage(newPageNumber: number): void {
    this.getMovies(newPageNumber);
  }
}
