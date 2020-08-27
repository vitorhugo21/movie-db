import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {
  @Input() moviePoster: string;
  @Input() movieTitle: string;

  getPoster(): string {
    const url = 'https://image.tmdb.org/t/p/original';
    const urlNotFound = 'assets/images/not-found-image.jpg';

    return !this.moviePoster
      ? urlNotFound
      : url.concat(this.moviePoster);
  }

}
