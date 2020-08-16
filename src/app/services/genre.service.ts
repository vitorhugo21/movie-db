import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Genre } from '../interfaces/genre.interface';
import { TheMovieDbResponse } from '../interfaces/the-movie-db-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
  }

  getGenres(): Observable<Genre[]> {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`;

    return this.http.get<Genre[]>(url).pipe(pluck('genres'));
  }

  getMovies(
    genreId: number,
    pageNumber: number = 1
  ): Observable<TheMovieDbResponse> {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}&page=${pageNumber}`;

    return this.http.get<TheMovieDbResponse>(url);
  }
}
