import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { find, pluck, switchMap } from 'rxjs/operators';
import { Genre } from '../interfaces/genre.interface';
import { TheMovieDbResponse } from '../interfaces/the-movie-db-response.interface';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['../../assets/scss/main.scss'],
})
export class GenreComponent implements OnInit, OnDestroy {
  genreTitle = '';
  genreMovies: TheMovieDbResponse;
  showMovies = false;
  genreSubscription: Subscription;

  constructor(
    private genreServices: GenreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const initialPage = 1;
    this.buildPage(initialPage);
  }

  getMovies(genreId: number, pageNumber: number = 1): void {
    this.showMovies = false;
    this.genreServices
      .getMovies(genreId, pageNumber)
      .subscribe((response: TheMovieDbResponse) => {
        this.genreMovies = response;
        setTimeout(() => {
          this.showMovies = true;
        }, 1500);
      });
  }

  changePage(newPageNumber: number): void {
    this.buildPage(newPageNumber);
  }

  buildPage(pageNumber: number): void {
    this.genreSubscription = this.route.params.subscribe(
      (params: { id: number }) => {
        this.getMovies(params.id, pageNumber);
        this.getGenreName(params.id);
      }
    );
  }

  getGenreName(genreId: number): void {
    this.genreServices
      .getGenres()
      .pipe(
        switchMap((genres: Genre[]) => from(genres)),
        find((genre: Genre) => genre.id === +genreId),
        pluck('name')
      )
      .subscribe((genreTitle: string) => {
        this.genreTitle = genreTitle;
      });
  }

  ngOnDestroy(): void {
    this.genreSubscription.unsubscribe();
  }
}
