import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TheMovieDbResponse } from '../interfaces/the-movie-db-response.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchMoviesService {
  private apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
  }

  getMovies(
    query: string,
    pageNumber: number = 1
  ): Observable<TheMovieDbResponse> {
    const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=${this.apiKey}&query=${query}&page=${pageNumber}`;

    return this.http.get<TheMovieDbResponse>(url);
  }
}
