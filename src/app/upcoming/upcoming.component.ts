import { Component, OnInit } from '@angular/core';
import { TheMovieDbResponse } from '../interfaces/the-movie-db-response.interface';
import { UpcomingService } from '../services/upcoming.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['../../assets/scss/main.scss'],
})
export class UpcomingComponent implements OnInit {
  upcomingMovies: TheMovieDbResponse;
  showMovies = false;

  constructor(private upcomingServices: UpcomingService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(pageNumber: number = 1): void {
    this.showMovies = false;
    this.upcomingServices
      .getMovies(pageNumber)
      .subscribe((response: TheMovieDbResponse) => {
        this.upcomingMovies = response;
        setTimeout(() => {
          this.showMovies = true;
        }, 1500);
      });
  }

  changePage(newPageNumber: number): void {
    this.getMovies(newPageNumber);
  }
}
