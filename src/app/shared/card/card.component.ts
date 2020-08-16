import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit(): void {}

  getPoster(): string {
    const url = 'https://image.tmdb.org/t/p/original';
    const urlNotFound = 'assets/images/not-found-image.jpg';

    return !this.movie.poster_path
      ? urlNotFound
      : url.concat(this.movie.poster_path);
  }
}
