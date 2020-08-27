import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { pluck } from 'rxjs/operators';
import { Movie } from '../interfaces/movie.interface';
import { MatDialog } from '@angular/material/dialog';
import { TrailerDialogComponent } from './trailer-dialog/trailer-dialog.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie;
  showMovie = false;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.params.pipe(
      pluck('id')
    ).subscribe((movieId: number) => {
      this.movieService.getMovieDetails(movieId).subscribe((movie: Movie) => {
        console.log(movie);
        this.movie = movie;
        this.showMovie = true;
      })
    });
  }

  openDialog() {
    this.dialog.open(TrailerDialogComponent, {
      data: this.movie.videos.results[0],
      panelClass: 'trailer-dialog-container',
      height: '600px',
      width: '900px',
    });
  }

  

}
